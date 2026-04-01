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
		context.metatags = {
			"title": "تمدين للحديد والصلب - رائدة تصنيع الصلب",
			"description": "تمدين للحديد والصلب شركة رائدة في تصنيع منتجات الصلب الهيكلي عالي الجودة بما في ذلك الزوايا والمسطحات والمربعات وحديد التسليح والبيليت.",
			"image": "/assets/tamdeensteel/img/logo.jpeg",
		}
	else:
		context.title = "Tamdeen Steel - Leading Steel Manufacturer"
		context.metatags = {
			"title": "Tamdeen Steel - Leading Steel Manufacturer",
			"description": "Tamdeen Steel is a premier manufacturer of high-quality structural steel products including angles, flat bars, square bars, rebar, and billets.",
			"image": "/assets/tamdeensteel/img/logo.jpeg",
		}
