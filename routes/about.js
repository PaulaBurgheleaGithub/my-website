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
				{
					mediaVal: "",
					path:"/css/general.css"
				},
				{
					mediaVal: "",
					path:"/css/about.css"
				},
				{
					mediaVal: "(min-width: 960px)",
					path:"/css/wide_about.css"
				}
			]
			// [
			// 	"/css/general.css",
			// 	"/css/about.css",
			// 	"/css/wide_about.css"
			// ]
		}
	}
)
