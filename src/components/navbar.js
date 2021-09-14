import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome';

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <ul className="navbar-menu">
                <ul className="navbar-start">
                    <li className="navbar-item">Projects</li>
                    <li className="navbar-item">Blog</li>
                </ul>
                <li className="navbar-item">Home</li>
                <ul className="navbar-end">
                    <li className="navbar-item">
                        <FontAwesomeIcon size="lg" icon={['fab', 'linkedin']}/>
                    </li>
                    <li className="navbar-item">
                        <FontAwesomeIcon size="lg" icon={['fab', 'github']} />
                    </li>
                </ul>
                
            </ul>
        </nav>
    )
};

export default Navbar;