import { read } from "utils";
import Mustache from 'mustache';

export default (template_path = "./", viewbag = {}) =>
	Mustache.render( read(template_path), viewbag);
