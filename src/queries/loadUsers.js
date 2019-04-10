export default () => {

	const userQuery = Array(  10 )
		.fill()
		.map((_,position ) => {

			position++;
			return fetch(`https://jsonplaceholder.typicode.com/users/`+position)
				.then(response => response.json())
				.then(json => ({ ...json }));
		});

	return Promise.all(userQuery);
};
