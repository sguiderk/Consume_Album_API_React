const conf = require('./../config/api');

export default async () => {

	const users = await fetch(conf.API_PHOTOS+`/users`).then(response => response.json());
	const usersAmount = users.length;

	const userQuery = Array(  usersAmount )
		.fill()
		.map((_,position ) => {

			position++;
			return fetch(conf.API_PHOTOS+`/users/`+position)
				.then(response => response.json())
				.then(json => ({ ...json }));
		});

	return Promise.all(userQuery);
};
