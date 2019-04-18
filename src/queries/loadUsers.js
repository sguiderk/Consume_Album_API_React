const conf = require('./../config/api');

function getRandomColor() {
	let letters = '23456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

export default async () => {

	const users = await fetch(conf.API_PHOTOS+`/users`).then(response => response.json());
	const usersAmount = users.length;

	const userQuery = Array(  usersAmount )
		.fill()
		.map((_,position ) => {

			position++;
			return fetch(conf.API_PHOTOS+`/users/`+position)
				.then(response => response.json())
				.then(json => ({ color:getRandomColor(),...json }));
		});

	return Promise.all(userQuery);
};
