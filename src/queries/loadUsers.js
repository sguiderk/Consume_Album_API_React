export default async () => {

	const users = await fetch(`https://jsonplaceholder.typicode.com/uers`).then(response => response.json());
	const usersAmount = users.length;

	const userQuery = Array(  usersAmount )
		.fill()
		.map((_,position ) => {

			position++;
			return fetch(`https://jsonplaceholder.typicode.com/users/`+position)
				.then(response => response.json())
				.then(json => ({ ...json }));
		});

	return Promise.all(userQuery);
};
