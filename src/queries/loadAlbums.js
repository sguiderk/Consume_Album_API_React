export default (page, pageLength) => {

	var star = 1;
    if( page > 1){
		 star = page * pageLength - pageLength;
	}


	const albumsQuery = Array(  pageLength  )
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
