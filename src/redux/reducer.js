import loadAlbumsQuery from 'queries/loadAlbums';
import loadPhotosQuery from 'queries/loadPhotos';
import loadUsersQuery from 'queries/loadUsers';

const LOAD_ALBUMS_START = 'LOAD_ALBUMS_START';
const LOAD_ALBUMS_SUCCESS = 'LOAD_ALBUMS_SUCCESS';
const LOAD_ALBUMS_FAILURE = 'LOAD_ALBUMS_FAILURE';

const LOAD_PHOTOS_START = 'LOAD_PHOTOS_START';
const LOAD_PHOTOS_SUCCESS = 'LOAD_PHOTOS_SUCCESS';
const LOAD_PHOTOS_FAILURE = 'LOAD_PHOTOS_FAILURE';

const LOAD_USER_START = 'LOAD_USER_START';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';


const initialState = {
	loadingAlbums: false,
	albums: [],
	loadingPhotos: false,
	photoAlbums: {},
	user:[],
	loadingUser: false,
};

export const loadAlbums = (page, pageLength) => async dispatch => {
	dispatch({ type: LOAD_ALBUMS_START });
	try {
		const albums = await loadAlbumsQuery(page, pageLength);
		dispatch({
			type: LOAD_ALBUMS_SUCCESS,
			payload: albums,
		});
	} catch (error) {
		dispatch({
			type: LOAD_ALBUMS_FAILURE,
			payload: error,
		});
	}

};


export const loadPhotos = (idAlbum ,page ,pageLength) => async dispatch => {
	dispatch({ type: LOAD_PHOTOS_START, payload: idAlbum });
	try {
		const photoAlbums = await loadPhotosQuery(idAlbum ,page ,pageLength);
		dispatch({
			type: LOAD_PHOTOS_SUCCESS,
			payload: {
				idAlbum,
				photoAlbums,
			},
		});
	} catch (error) {
		dispatch({
			type: LOAD_PHOTOS_FAILURE,
			payload: {
				idAlbum,
				error,
			},
		});
	}
};


export const loadUser = () => async dispatch => {
	dispatch({ type: LOAD_USER_START });
	try {
		const users = await loadUsersQuery();
		dispatch({
			type: LOAD_USER_SUCCESS,
			payload: users
		});
	} catch (error) {
		dispatch({
			type: LOAD_USER_FAILURE,
			payload: error
		});
	}

};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case LOAD_ALBUMS_START:
			return { ...state, loadingAlbums: true };
		case LOAD_ALBUMS_SUCCESS:
			return {...state, loadingAlbums: false, albums: payload };
		case LOAD_ALBUMS_FAILURE:
			return { ...state, loadingAlbums: false };
		case LOAD_PHOTOS_START:
			return { ...state, loadingPhotos: true, photoAlbums: { ...state.photoAlbums, [payload]: [] } };
		case LOAD_PHOTOS_SUCCESS:
			return {
				...state,
				loadingPhotos: false,
				photoAlbums: {
					...state.photoAlbums,
					[payload.idAlbum]: payload.photoAlbums,
				},
			};
		case LOAD_PHOTOS_FAILURE:
			return { ...state, loadingPhotos: false };
		case LOAD_USER_START:
			return { ...state, loadingUser: true };
		case LOAD_USER_SUCCESS:
			return { ...state, loadingUser: false, users: payload };
		case LOAD_USER_FAILURE:
			return { ...state, loadingUser: false };
		default:
			return state;
	}
};
