import express from 'express';
import { log as print } from 'node:console';
import { read_data as read } from 'utils';

const ROUTES = read('data/pages').map(page => page.controller);

const {domain, port} = read('data/settings');
const app = express();

app.use(
	express.static(`./public`)
);

for (const route of ROUTES) {
	const {default: router} = await import(`./routes/${ route }.js`);
	try {
		app.use(router);
	} catch(e) {
		print(`Unable to use router from ./routes/${ route }.js`);
	}
}

app.listen(
	port,
	() => print(`Server started ${ domain }:${ port }`)
);
