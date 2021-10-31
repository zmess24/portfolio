import React, { Fragment, useState } from 'react';
import '../utils/fontawesome';
import Header from './Header';
import Footer from './Footer.js';
import Dropdown from './Dropdown';

const Layout = ({ children }) => { 
    let [dropDownState, setDropDownState] = useState(false);

    let handleToggle = (e) => {
        e.preventDefault();
        setDropDownState(!dropDownState)
    }

    return (
        <Fragment>
            <Header dropDownState={dropDownState} handleClick={handleToggle} />
            <Dropdown dropDownState={dropDownState} data={[1,2,3,4,5,6,7,8,9]} handleClick={handleToggle}/>
            <main>{children}</main>
            <Footer/>
        </Fragment>
    )
};

export default Layout; 