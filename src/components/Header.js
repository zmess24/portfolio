import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <ul className="navbar-menu">
                <li className="navbar-item navbar-start">Projects</li>
                <li className="navbar-item">Home</li>
                <li className="navbar-item navbar-end">Blog</li>
                {/* <ul className="navbar-start">
                    <li className="navbar-item">Projects</li>
                    {/* <li className="navbar-item">Blog</li> */}
                {/* </ul>
                <li className="navbar-item">Home</li>
                <ul className="navbar-end">
                    <li className="navbar-item">
                        <FontAwesomeIcon size="lg" icon={['fab', 'linkedin']}/>
                    </li>
                    <li className="navbar-item">
                        <FontAwesomeIcon size="lg" icon={['fab', 'github']} />
                    </li>
                </ul> */}
            </ul> 
        </nav>
    )
};

export default Header;