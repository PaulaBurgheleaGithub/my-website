import page_router from "./page_router.js";

export default page_router(
	'/contact',
	'contact',
	'Contact me',
	(req, res) => {
		return {
			scripts: [
				"/js/contact-animation.js"
			],
			styles: [
				{
					mediaVal: "",
					path:"/css/general.css"
				},
				{
					mediaVal: "",
					path: "/css/contact.css"
				}
			]
		}
	}
)
