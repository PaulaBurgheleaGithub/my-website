import router from './router.js';
import view from '../views/view.js';
import { read_data as read } from 'utils';

const menu = read('data/pages').slice(1, 4); // <-- remove homepage as menu
const footer = read('data/pages').slice(4, 6);
const img_list = read('data/pages').slice(6, 14);
const projects = read('data/pages').slice(14);

// `(mediaVal? mediaVal : "")`
const render_style = ({ mediaVal, path }) => `<link rel="stylesheet" type="text/css" media="${ mediaVal }" href="${ path }" />`;
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
					footer,
					path: req.path,
					is_home: req.path === '/',
					styles: render(styles, render_style),
					scripts: render(scripts, render_script),

					year: (new Date()).getFullYear(),
					//TODO scripts and styles
					main: view(
						`templates/${ template_name }.html`,
						{
							title,
							img_list,
							projects,
							...model
						}
					)
				}
			);
		}
	);
}
