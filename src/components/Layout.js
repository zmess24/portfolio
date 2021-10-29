import React, { Fragment, useState } from 'react';
import '../utils/fontawesome';
import Header from './Header';
import Footer from './Footer.js';
import Dropdown from './Dropdown';

const Layout = ({ children }) => { 
    let [dropdownToggle, setdropdownToggle] = useState(false);

    return (
        <Fragment>
            <Header menuClick={setdropdownToggle} />
            <Dropdown classes={dropdownToggle} data={[1,2,3]} exitClick={setdropdownToggle}/>
            <main>{children}</main>
            <Footer/>
        </Fragment>
    )
};

export default Layout; 