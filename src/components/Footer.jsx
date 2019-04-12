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
                                    <li><a href=""><i className="icon fa-twitter">&nbsp;</i>Twitter</a></li>
                                    <li><a href=""><i className="icon fa-facebook">&nbsp;</i>Facebook</a></li>
                                    <li><a href=""><i className="icon fa-instagram">&nbsp;</i>Instagram</a></li>
                                    <li><a href=""><i className="icon fa-github">&nbsp;</i>Github</a></li>
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
