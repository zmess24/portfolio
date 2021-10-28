import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <header className="navbar-menu">
                <section className="navbar-item">
                    <a href="/">Projects</a>
                    <a href="/">Blog</a>
                    <a href="/">Contact</a>
                </section>
                <section className="navbar-item navbar-brand">
                    <StaticImage alt="Logo" src="../images/logo_2.png" />
                    {/* <a href="/">ZDM</a> */}
                </section>
                <section className="navbar-item">
                    <a href="/">
                        <FontAwesomeIcon size="lg" icon={['fab', 'linkedin']}/>
                    </a>
                    <a href="/">
                        <FontAwesomeIcon size="lg" icon={['fab', 'github']} />
                    </a>      
                </section>
            </header> 
        </nav>
    )
};

export default Header;