import './App.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadAlbums } from 'redux/reducer';
import AlbumsList from 'components/AlbumsList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PhotosList from 'components/PhotosList';

const mapDispatchToProps = {
	initialLoad: loadAlbums,
};

class App extends Component {

	static propTypes = {
		initialLoad: PropTypes.func,
	};

	componentDidMount() {
		this.props.initialLoad(1, 10);
	}

	render() {
		return (
			<Router>
				<div className="App">
					<div className="App-window">
						<h1 className="App-window-title">Album App</h1>
						<Route path="/" exact render={() => <AlbumsList />} />
						<Route path="/:idAlbum" render={({ match }) => <PhotosList idAlbum={match.params.idAlbum} />} />
					</div>
				</div>
			</Router>
		);
	}
}

export default connect(
	null,
	mapDispatchToProps
)(App);
