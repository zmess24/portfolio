import React, { Fragment } from 'react';
import '../utils/fontawesome';
import Header from './Header';
import Footer from './Footer.js';

const Layout = ({ children }) => { 
    return (
        <Fragment>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </Fragment>
    )
};

export default Layout; 