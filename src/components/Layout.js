import React, { Fragment, useState } from 'react';
import '../utils/fontawesome';
import Header from './Header';
import Footer from './Footer.js';
import Dropdown from './Dropdown';
import Video from './Video'
import { useSiteMetadata } from "../hooks/use-site-metadata"


const Layout = ({ children }) => { 
    let [dropDownState, setDropDownState] = useState(false);
    const { github, linkedIn, projects, blogs } = useSiteMetadata();

    let handleToggle = (e) => {
        e.preventDefault();
        setDropDownState(!dropDownState)
    }

    return (
        <Fragment>
            <Video />
            <main className="wrapper">
                <Header dropDownState={dropDownState} handleClick={handleToggle} />
                <Dropdown dropDownState={dropDownState} data={projects} handleClick={handleToggle}/>
                <section>{children}</section>
                <Footer socialMedia={{ github, linkedIn }}/>
            </main>
        </Fragment>
    )
};

export default Layout; 