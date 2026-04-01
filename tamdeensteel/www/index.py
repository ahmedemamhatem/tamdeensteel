import frappe

no_cache = 1


def get_context(context):
	context.no_header = 1
	context.no_breadcrumbs = 1
	context.no_sidebar = 1
	context.show_sidebar = 0

	lang = frappe.local.lang or "en"
	context.lang = lang
	context.is_rtl = lang == "ar"
	context.dir = "rtl" if lang == "ar" else "ltr"

	if lang == "ar":
		context.title = "تمدين للحديد والصلب - رائدة تصنيع الصلب"
	else:
		context.title = "Tamdeen Steel - Leading Steel Manufacturer"
