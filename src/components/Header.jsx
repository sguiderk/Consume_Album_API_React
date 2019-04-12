import React, { Component } from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <a href=""className="logo"><img src={process.env.PUBLIC_URL + '/logo.svg' } alt="logo" /></a>
                    <div className="content"><span>{this.props.headerProp}</span></div>
                </header>
            </div>
        );
    }
}

export default Header;