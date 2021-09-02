import * as React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                <ul className="navbar-start">
                    <li className="navbar-item">Home</li>
                    <li className="navbar-item">Blog</li>
                    <li className="navbar-item">Projects</li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;