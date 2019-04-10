export default (idAlbum ,page ,pageLength) => {

	var start = 0;

	if ( page > 1 ) {
		start = page * pageLength;
	}

	var end = page * pageLength + pageLength;

	const photosQuery = Array(pageLength)
		.fill()
		.map((_, position) => {
			const round = position + 1;
			return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${idAlbum}&_start=`+ ( round + start ) +`&_limit=`+ ( round + end ) )
				.then(response => response.json())
				.then(json => ({ round, ...json[0]}));
		});

	return Promise.all(photosQuery);
};
