export default async (page, pageLength) => {

	const albums = await fetch(`https://jsonplaceholder.typicode.com/albums`).then(response => response.json());
	const albumsAmount = albums.length;

	var star = 1;
    if( page > 1){
		 star = page * pageLength - pageLength;
	}

	const albumsQuery = Array(  page?pageLength:albumsAmount  )
		.fill()
		.map((_,position ) => {
			position = position + star;

			let result =  fetch(`https://jsonplaceholder.typicode.com/albums/`+ position)
				.then(response => response.json())
				.then(json => ({
					...json
					,user:null
				}))
			    ;

			return result;

		});

	return Promise.all(albumsQuery);
};
