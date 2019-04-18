const conf = require('./../config/api');

export default async (idAlbum ,page ,pageLength) => {

	const photos = await fetch(conf.API_PHOTOS+`/photos/?albumId=`+idAlbum).then(response => response.json());
	const photosAmount = photos.length;

	let star = 1;
	if ( page > 1){
		star = page * pageLength - pageLength;
	}

	const photosQuery = Array(page?pageLength:photosAmount )
		.fill()
		.map((_, position) => {
			position = position + star;
			return fetch(conf.API_PHOTOS+`/photos/`+ position )
				.then(response => response.json())
				.then(json => ({ ...json }));
		});

	return Promise.all(photosQuery);
};
