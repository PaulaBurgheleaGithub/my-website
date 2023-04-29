import router from './router.js';
import view from '../views/view.js';
import { read_data as read } from 'utils';

const menu = read('data/pages').slice(1); // <-- remove homepage as menu

const render_style = path => `<link rel="stylesheet" type="text/css" href="${ path }" />`;
const render_script = path => `<script type="module" src="${ path }"></script>`;

const render = (paths, renderer) => paths.map(path => renderer(path)).join('\n');



export default (
	path = "/",
	template_name = "name",
	title = "",
	handler = (req, res) => Object()
) => {
	return router(
		path,
		(req, res) => {
			const model = handler(req, res);

			const {
				styles = [],
				scripts = []
			} = model;

			const site_title = 'Paula Burghelea';

			return view(
				'templates/master.html',
				{
					site_title,
					title: `${ site_title } | ${ title }`,
					menu,
					
					path: req.path,
					is_home: req.path=== '/',
					styles: render(styles, render_style),
					scripts: render(scripts, render_script),

					year: (new Date()).getFullYear(),
					//TODO scripts and styles
					main: view(
						`templates/${ template_name }.html`,
						{
							title,
							...model
						}
					)
				}
			);
		}
	);
}
