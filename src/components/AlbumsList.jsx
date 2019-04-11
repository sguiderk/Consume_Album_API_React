import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, ListItem } from 'components/List';
import { AnchorLink, AppLink } from 'components/Link'
import { Page } from 'components/Page';
import { loadAlbums, loadUser } from 'redux/reducer';
import { TablePagination } from '@trendmicro/react-paginations';
import '@trendmicro/react-paginations/dist/react-paginations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft ,faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = (state, ownProps) => ({
	loading: state.loadingAlbums,
	albums: state.albums,
	users: state.users,
});

const mapDispatchToProps = {
	initialLoad: loadAlbums,
	loadUser: loadUser,
};

export class AlbumsList extends Component {
	static propTypes = {
		initialLoad: PropTypes.func,
		loading: PropTypes.bool,
		albums: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
				title: PropTypes.string,
				year: PropTypes.number,
				user : PropTypes.object,
			})
		),
		users: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
				name: PropTypes.string,
				email: PropTypes.string,
			})
		),
	};
	state = {
		page: 1,
		pageLength: 10,
		totalRecords: 100
	};
	static defaultProps = {
		loading: true,
		albums: [],
		users:[]
	};
	componentDidMount() {
		this.props.initialLoad(1, 10);
		this.props.loadUser();
	}

	render() {

		const { loading, albums , users } = this.props;
		const state = { ...this.state };
		albums.map( album => (album.user = (users.find( x => x.id === album.userId)) ));

		return (
			<Page title="List of album" loading={loading}>
					<div className="container">
						<div className="gallery">
							{albums.map(album => (
								<div className="gallery__item"  key={album.id} >
									<figure className="gallery__figure rollover"  >
										<AppLink to={`/${album.id}`}>
											<div className="cover-rollover">
											{album.title}
											</div>
										</AppLink>
									</figure>
									<div className="gallery__info">
										<div className="gallery__content">
											<div className="row">
												<h5>{album.title}</h5>
											</div>
											<div className="row row-2col">
												<div className="box-left">From Croatia</div>
												<div className="box-right">
													April 09, 2019
												</div>
											</div>
										</div>
										<div className="gallery__footer">
											<div className="box-left">
												<div className="box-byuser js-tooltip-user">
													<div className="item js-user" data-username="MldGautier">
														<FontAwesomeIcon icon={ faUser }/>
													</div>
													<div className="by">
														<strong>By</strong>{album.user ?album.user.name:null}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				<TablePagination
					type="full"
					page={state.page}
					pageLength={state.pageLength}
					totalRecords={state.totalRecords}
					onPageChange={({ page, pageLength }) => {
						this.setState({ page, pageLength })
						this.props.initialLoad(page, pageLength);
					}}
					pageLengthMenu={[10,20,50]}
					prevPageRenderer={() => <FontAwesomeIcon icon={ faArrowLeft }/>}
					nextPageRenderer={() => <FontAwesomeIcon icon={ faArrowRight }/>}
				/>
			</Page>
		);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(AlbumsList);
