import * as React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">Home</a>
                    <a class="navbar-item">Blog</a>
                    <a class="navbar-item">Projects</a>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;