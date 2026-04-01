app_name = "tamdeensteel"
app_title = "Tamdeensteel"
app_publisher = "Ahmed Emam"
app_description = "Tamdeen Steel - Leading Steel Manufacturer"
app_email = "ahmedemamhatem@gmail.com"
app_license = "mit"

# Apps
# ------------------

# required_apps = []

# Includes in <head>
# ------------------

# include js, css files in header of web template
# web_include_css = "/assets/tamdeensteel/css/tamdeensteel.css"
# web_include_js = "/assets/tamdeensteel/js/tamdeensteel.js"

# Home Pages
# ----------

# application home page (will override Website Settings)
home_page = "index"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }


# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "tamdeensteel.utils.jinja_methods",
# 	"filters": "tamdeensteel.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "tamdeensteel.install.before_install"
# after_install = "tamdeensteel.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "tamdeensteel.uninstall.before_uninstall"
# after_uninstall = "tamdeensteel.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "tamdeensteel.utils.before_app_install"
# after_app_install = "tamdeensteel.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "tamdeensteel.utils.before_app_uninstall"
# after_app_uninstall = "tamdeensteel.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "tamdeensteel.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
# 	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"tamdeensteel.tasks.all"
# 	],
# 	"daily": [
# 		"tamdeensteel.tasks.daily"
# 	],
# 	"hourly": [
# 		"tamdeensteel.tasks.hourly"
# 	],
# 	"weekly": [
# 		"tamdeensteel.tasks.weekly"
# 	],
# 	"monthly": [
# 		"tamdeensteel.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "tamdeensteel.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "tamdeensteel.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "tamdeensteel.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["tamdeensteel.utils.before_request"]
# after_request = ["tamdeensteel.utils.after_request"]

# Job Events
# ----------
# before_job = ["tamdeensteel.utils.before_job"]
# after_job = ["tamdeensteel.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"tamdeensteel.auth.validate"
# ]

# Automatically update python controller files with type annotations for this app.
# export_python_type_annotations = True

# default_log_clearing_doctypes = {
# 	"Logging DocType Name": 30  # days to retain logs
# }

# Translation
# ------------
# List of apps whose translatable strings should be excluded from this app's translations.
# ignore_translatable_strings_from = []

