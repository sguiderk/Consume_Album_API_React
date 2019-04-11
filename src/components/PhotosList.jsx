import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPhotos,loadUser } from 'redux/reducer';
import { Page } from 'components/Page';
import { TablePagination } from '@trendmicro/react-paginations';
import '@trendmicro/react-paginations/dist/react-paginations.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight, faSearch, faTimesCircle, faUser} from '@fortawesome/free-solid-svg-icons';


const mapStateToProps = (state, ownProps) => ({
	loading: state.loadingPhotos,
	photos: state.photoAlbums[ownProps.idAlbum] || [],
	users: state.users,
	album: state.albums.find(album => album.id === parseInt(ownProps.idAlbum, 10)),
});

const mapDispatchToProps = {
	loadPhotos: loadPhotos,
	loadUser: loadUser,
};

const customStyles = {
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)'
	}
};

export class PhotosList extends Component {

	constructor() {
		super();
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal(id) {
		this.setState({modalIsOpen:
				{
					[id]: true
				}
		});
	}

	afterOpenModal() {
		this.subtitle.style.color = '#000';
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

	static propTypes = {
		loading: PropTypes.bool,
		photos: PropTypes.arrayOf(
			PropTypes.shape({
				albumId: PropTypes.number,
				id: PropTypes.number,
				title: PropTypes.string,
				url: PropTypes.string,
			})
		),
		album: PropTypes.shape({
			id: PropTypes.number,
			title: PropTypes.string,
			idAlbum: PropTypes.number,
			user : PropTypes.object,
		}),
		users: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
				name: PropTypes.string,
				email: PropTypes.string,
			})
		),
		idAlbum: PropTypes.string,
		loadPhotos: PropTypes.func,
	};

	state = {
		page: 1,
		pageLength: 10,
		totalRecords: 50,
		modalIsOpen: false,
	};

	componentDidMount() {
		const { photos, loadPhotos, idAlbum } = this.props;
		this.props.loadUser();
		photos.length === 0 && loadPhotos(idAlbum,1,10);
	}

	render() {
		const { photos, idAlbum, loading, album ,users } = this.props;
		const state = { ...this.state };



		return (
			<Page title={`${album?album.title:''}`} loading={loading} backButton>
				<div className="by">
					<div className="item js-user" data-username="MldGautier">
						<FontAwesomeIcon icon={ faUser }/>
					</div>
					<strong>By</strong>{album?album.user.name:''}
				</div>
				<div className="container">
					<div className="gallery">
					{photos.map(photo => {
						return (
							<div className="gallery__item" key={photo.id} >
								<figure className="gallery__figure rollover">
									<div className="cover-rollover">
									<img src={photo.url} width='100px' />
									</div>
									<div className="hover-item ">
										<FontAwesomeIcon className="open-image" onClick= {this.openModal.bind(this, photo.id)} icon={ faSearch }/>
									</div>
								</figure>
								{ photo.title }
								<Modal
									isOpen={this.state.modalIsOpen[photo.id]}
									onAfterOpen={this.afterOpenModal}
									onRequestClose={this.closeModal}
									style={customStyles}
									contentLabel="Example Modal"
								>
									<FontAwesomeIcon onClick={this.closeModal} icon={ faTimesCircle }/>
									<h4 ref={subtitle => this.subtitle = subtitle}>{photo.title}</h4>
									<div className="by">
										<div className="item js-user" data-username="MldGautier">
											<FontAwesomeIcon icon={ faUser }/>
										</div>
										<strong>By</strong>{album?album.user.name:''}
									</div>
									<img src={photo.url}  />
								</Modal>
							</div>
						);
					})}
					</div>
				</div>
				<TablePagination
					type="full"
					page={state.page}
					pageLength={state.pageLength}
					totalRecords={state.totalRecords}
					onPageChange={({ page, pageLength }) => {
						this.setState({ page, pageLength })
						this.props.loadPhotos(this.props.idAlbum, page, pageLength);
					}}
					prevPageRenderer={() => <FontAwesomeIcon icon={ faArrowLeft }/>}
					nextPageRenderer={() => <FontAwesomeIcon icon={ faArrowRight }/>}
				/>
			</Page>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotosList);
