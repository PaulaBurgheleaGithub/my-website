import page_router from "./page_router.js";

export default page_router(
	'/',
	'index',
	'Home Page',
	(req, res) => {
		return {
			scripts: ["/js/index.js"]
		}
	}
)
