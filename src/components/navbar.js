import * as React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <ul className="navbar-menu">
                <li className="navbar-start">Projects</li>
                <li className="navbar-item">Home</li>
                <li className="navbar-end">Blog</li>
            </ul>
        </nav>
    )
};

export default Navbar;