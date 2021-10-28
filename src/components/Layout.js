import React, { Fragment, useState } from 'react';
import '../utils/fontawesome';
import Header from './Header';
import Footer from './Footer.js';

const Layout = ({ children }) => { 
    let [dropdownToggle, setdropdownToggle] = useState(false);
    return (
        <Fragment>
            <Header menuClick={setdropdownToggle} />
            <main>{children}</main>
            <Footer/>
            {dropdownToggle ? <div>Open</div> : <div>Closed</div>}
        </Fragment>
    )
};

export default Layout; 