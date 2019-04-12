import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadAlbums } from 'redux/reducer';
import Header from 'components/Header';
import Footer from 'components//Footer';
import AlbumsList from 'components/AlbumsList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PhotosList from 'components/PhotosList';

const mapDispatchToProps = {
	initialLoad: loadAlbums,
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			header: "Consume Album API",
			footer: "Content Footer",
		}
	}
	static propTypes = {
		initialLoad: PropTypes.func,
	};
	render() {
		return (
			<Router>
				<div className="App">
					<div className="App-window">
						<Header headerProp = {this.state.header}/>
						<h1 className="App-window-title">Album App</h1>
						<Route path="/" exact render={() => <AlbumsList />} />
						<Route path="/:idAlbum" render={({ match }) => <PhotosList idAlbum={match.params.idAlbum} />} />
						<Footer footerProp = {this.state.footer}/>
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
