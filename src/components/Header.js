import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { StaticImage } from 'gatsby-plugin-image';

const Header = ({ dropDownState, handleClick}) => {
    let classNames = dropDownState ? "alternate" : "";

    return (
        <nav className="navbar" role="navigation" aria-label="primary">
            <header className="navbar-menu" id="primary-nav">
                <section className="navbar-item">
                    <a href="/" title="open" onClick={handleClick}>Projects</a>
                    <a href="/" title="open" onClick={handleClick}>Blog</a>
                    <a href="/">Contact</a>
                </section>
                <section className="navbar-item navbar-brand is-hidden-mobile">
                    <a href="/" className={classNames}>ZDM</a>
                </section> 
            </header>
        </nav>
    )
};

export default Header;