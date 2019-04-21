const conf = require('./../config/api');

export default async (page, pageLength) => {

	const albums = await fetch(conf.API_PHOTOS+`/albums`).then(response => response.json());
	const albumsAmount = albums.length;

	let start = 1;
        if ( page > 1) {
	    start = page * pageLength - pageLength;
	}

	const albumsQuery = Array(  page?pageLength:albumsAmount  )
		.fill()
		.map((_,position ) => {
			position = position + start;

			let result =  fetch(conf.API_PHOTOS+`/albums/`+ position)
				.then(response => response.json())
				.then(json => ({...json}));

			return result;

		});

	return Promise.all(albumsQuery);
};
