import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPhotos } from 'redux/reducer';
import { ListItem, List } from 'components/List';
import { AnchorLink } from 'components/Link'
import { Page } from 'components/Page';
import { TablePagination } from '@trendmicro/react-paginations';
import '@trendmicro/react-paginations/dist/react-paginations.css';
import Modal from 'react-modal';

const mapStateToProps = (state, ownProps) => ({
	loading: state.loadingPhotos,
	photos: state.photoAlbums[ownProps.idAlbum] || [],
	album: state.albums.find(album => album.idAlbum === parseInt(ownProps.idAlbum, 10)),
});

const mapDispatchToProps = {
	loadPhotos: loadPhotos,
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
		// references are now sync'd and can be accessed.
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
		}),
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
		photos.length === 0 && loadPhotos(idAlbum);
	}

	render() {
		const { photos, idAlbum, loading, album } = this.props;
		const state = { ...this.state };

		return (
			<Page title={`Album ${idAlbum} Photos`} loading={loading} backButton>
				<List>
					{photos.map(photo => {

						return (
							<ListItem  key={photo.id}>
								<AnchorLink link={photo.url}>
									{photo.id} {photo.url}
								</AnchorLink>
								<img src={photo.url} width='50px' />
								{ photo.title }
								<button onClick= {this.openModal.bind(this, photo.id)}>Open Modal</button>
								<Modal
									isOpen={this.state.modalIsOpen[photo.id]}
									onAfterOpen={this.afterOpenModal}
									onRequestClose={this.closeModal}
									style={customStyles}
									contentLabel="Example Modal"
								>
									<h2 ref={subtitle => this.subtitle = subtitle}>title</h2>
									<button onClick={this.closeModal}>close</button>
									<img src={photo.url}  />

								</Modal>
							</ListItem>
						);
					})}
				</List>
				<TablePagination
					type="full"
					page={state.page}
					pageLength={state.pageLength}
					totalRecords={state.totalRecords}
					onPageChange={({ page, pageLength }) => {
						this.setState({ page, pageLength })
						this.props.loadPhotos(this.props.idAlbum, page, pageLength);
					}}
					prevPageRenderer={() => <i className="fa fa-angle-left" />}
					nextPageRenderer={() => <i className="fa fa-angle-right" />}
				/>
			</Page>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotosList);
