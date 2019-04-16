import React, { Component } from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="inner">
                        <div className="content">
                            <section>
                                <h3>Title footer 1</h3>
                                <p>{this.props.footerProp}</p></section>
                            <section>
                                <h4>Title footer 2</h4>
                                <ul className="alt">
                                    <li><a href="">Link 1</a></li>
                                    <li><a href="">Link 2</a></li>
                                    <li><a href="">Link 3</a></li>
                                    <li><a href="">Link 4</a></li>
                                </ul>
                            </section>
                            <section><h4>Title footer 3</h4>
                                <ul className="plain">
                                    <li><a href="">Twitter</a></li>
                                    <li><a href="">Facebook</a></li>
                                    <li><a href="">Instagram</a></li>
                                    <li><a href="">Github</a></li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
