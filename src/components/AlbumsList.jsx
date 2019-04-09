import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, ListItem } from 'components/List';
import { AnchorLink, AppLink } from 'components/Link'
import { Page } from 'components/Page';
import { loadAlbums } from 'redux/reducer';

import { TablePagination } from '@trendmicro/react-paginations';
import '@trendmicro/react-paginations/dist/react-paginations.css';

const mapStateToProps = state => ({
	loading: state.loadingAlbums,
	albums: state.albums,
});


const mapDispatchToProps = {
	initialLoad: loadAlbums,
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
	};

	render() {

		const { loading, albums ,initialLoad } = this.props;
		const state = { ...this.state };
		return (
			<Page title="List of album" loading={loading}>
				<List>
					{albums.map(album => (
						<ListItem key={album.id}>
							<AppLink to={`/${album.id}`}>
								{album.title}
							</AppLink>
							{' - '}
							<AnchorLink link={album.url}>
								{album.title} {album.id}
							</AnchorLink>
						</ListItem>
					))}
				</List>
				<TablePagination
					type="full"
					page={state.page}
					pageLength={state.pageLength}
					totalRecords={state.totalRecords}
					onPageChange={({ page, pageLength }) => {
						this.setState({ page, pageLength })
						this.props.initialLoad(page, pageLength);
					}}
					prevPageRenderer={() => <i className="fa fa-angle-left" />}
					nextPageRenderer={() => <i className="fa fa-angle-right" />}
				/>
			</Page>
		);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(AlbumsList);
