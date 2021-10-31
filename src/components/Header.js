import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { StaticImage } from 'gatsby-plugin-image';

const Header = ({ dropDownState, handleClick}) => {
    let classNames = dropDownState ? "alternate" : "";

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <header className="navbar-menu">
                <section className="navbar-item">
                    <a href="/" onClick={handleClick}>Projects</a>
                    <a href="/" onClick={handleClick}>Blog</a>
                    <a href="/">Contact</a>
                </section>
                <section className="navbar-item">
                    <a href="https://www.linkedin.com/in/zacmessinger/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon size="lg" icon={['fab', 'linkedin']}/>
                    </a>
                    <a href="https://github.com/zmess24" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon size="lg" icon={['fab', 'github']} />
                    </a>      
                </section>
                <section className="navbar-item navbar-brand">
                    {/* <StaticImage alt="Logo" src="../images/logo_2.png" /> */}
                    <a href="/" className={classNames}>ZDM</a>
                </section>
            </header> 
        </nav>
    )
};

export default Header;