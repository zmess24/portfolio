import * as React from 'react';
import './master.scss';
import Navbar from '../components/navbar';

const IndexPage = () => {
    return (
        <div>
            <Navbar/>
            <header>
                <h1>Hello World</h1>
            </header>
        </div>
    )
};

export default IndexPage;