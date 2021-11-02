import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="tertiary">
            <header className="navbar-menu">
                <section className="navbar-item" id="footer">
                    <a href="https://www.linkedin.com/in/zacmessinger/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon size="lg" icon={['fab', 'linkedin']}/>
                    </a>
                    <a href="https://github.com/zmess24" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon size="lg" icon={['fab', 'github']} />
                    </a>      
                </section>
            </header> 
        </nav>
    )
};

export default Footer;