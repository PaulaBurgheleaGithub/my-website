import page_router from "./page_router.js";

export default page_router(
	'/about',
	'about',
	'About me',
	(req, res) => {
		return {
			scripts: [
				"/js/animation.js"
			],
			styles: [
				"/css/about.css"
			]
		}
	}
)
