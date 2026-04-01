import frappe

no_cache = 1


def get_context(context):
	context.no_header = 1
	context.no_breadcrumbs = 1
	context.no_sidebar = 1
	context.show_sidebar = 0

	# Use standalone template - bypass Frappe navbar/footer
	context.base_template_path = "tamdeensteel/templates/tamdeen_base.html"

	lang = frappe.local.lang or "en"
	context.lang = lang
	context.is_rtl = lang == "ar"
	context.dir = "rtl" if lang == "ar" else "ltr"

	if lang == "ar":
		context.title = "تمدين للحديد والصلب - رائدة تصنيع الصلب"
		context.metatags = {
			"title": "تمدين للحديد والصلب - رائدة تصنيع الصلب",
			"description": "تمدين للحديد والصلب شركة رائدة في تصنيع منتجات الصلب الهيكلي عالي الجودة.",
			"image": "/assets/tamdeensteel/img/logo.jpeg",
		}
	else:
		context.title = "Tamdeen Steel - Leading Steel Manufacturer"
		context.metatags = {
			"title": "Tamdeen Steel - Leading Steel Manufacturer",
			"description": "Tamdeen Steel is a premier manufacturer of high-quality structural steel products.",
			"image": "/assets/tamdeensteel/img/logo.jpeg",
		}
