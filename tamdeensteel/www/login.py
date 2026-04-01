import frappe
from frappe import _
from frappe.utils import cint
from frappe.utils.oauth import get_oauth2_authorize_url, get_oauth_keys
from frappe.utils.password import get_decrypted_password
from frappe.utils.html_utils import get_icon_html
from frappe.utils.data import escape_html

no_cache = True


def get_context(context):
	redirect_to = frappe.local.request.args.get("redirect-to")

	if frappe.session.user != "Guest":
		frappe.local.flags.redirect_location = redirect_to or "/app"
		raise frappe.Redirect

	lang = frappe.local.lang or "en"
	context.lang = lang
	context.is_rtl = lang == "ar"
	context.dir = "rtl" if lang == "ar" else "ltr"

	context.no_header = True
	context.no_breadcrumbs = True
	context.no_sidebar = True
	context.show_sidebar = False
	context.hide_login = True

	if lang == "ar":
		context.title = "تسجيل الدخول - تمدين للحديد والصلب"
	else:
		context.title = "Login - Tamdeen Steel"

	context.disable_signup = cint(frappe.get_website_settings("disable_signup"))
	context.disable_user_pass_login = cint(frappe.get_system_settings("disable_user_pass_login"))

	login_label = [_("Email")]
	if frappe.utils.cint(frappe.get_system_settings("allow_login_using_mobile_number")):
		login_label.append(_("Mobile"))
	if frappe.utils.cint(frappe.get_system_settings("allow_login_using_user_name")):
		login_label.append(_("Username"))
	context.login_label = f" {_('or')} ".join(login_label)

	context.login_name_placeholder = "jane@example.com"

	context.provider_logins = []
	providers = frappe.get_all(
		"Social Login Key",
		filters={"enable_social_login": 1},
		fields=["name", "client_id", "base_url", "provider_name", "icon"],
		order_by="name",
	)
	for provider in providers:
		client_secret = get_decrypted_password("Social Login Key", provider.name, "client_secret", raise_exception=False)
		if not client_secret:
			continue
		icon = None
		if provider.icon:
			if provider.provider_name == "Custom":
				icon = get_icon_html(provider.icon, small=True)
			else:
				icon = f"<img src={escape_html(provider.icon)!r} alt={escape_html(provider.provider_name)!r}>"
		if provider.client_id and provider.base_url and get_oauth_keys(provider.name):
			context.provider_logins.append({
				"name": provider.name,
				"provider_name": provider.provider_name,
				"auth_url": get_oauth2_authorize_url(provider.name, redirect_to),
				"icon": icon,
			})
