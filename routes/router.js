import { Router } from 'express';

export default (
	path = '/',
	handler = (req, res) => ""
) =>
	Router()
		.get(
			path,
			(req, res) => res.send(handler(req, res))
		);
