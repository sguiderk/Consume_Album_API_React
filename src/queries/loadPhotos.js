export default async (idAlbum ,page ,pageLength) => {

	const photos = await fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=`+idAlbum).then(response => response.json());
	const photosAmount = photos.length;

	var star = 1;
	if( page > 1){
		star = page * pageLength - pageLength;
	}

	const photosQuery = Array(page?pageLength:photosAmount )
		.fill()
		.map((_, position) => {
			position = position + star;
			return fetch(`https://jsonplaceholder.typicode.com/photos/`+ position )
				.then(response => response.json())
				.then(json => ({ ...json }));
		});

	return Promise.all(photosQuery);
};
