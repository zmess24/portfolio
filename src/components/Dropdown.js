import * as React from 'react';
import Card from './Card';

const Dropdown = ({dropDownState, data, handleClick}) => {
    let classNames = dropDownState ? "dropdown show-dropdown" : "dropdown hide-dropdown";
    console.log(data)
    return (
        <main className={classNames}>
             <nav className="navbar" role="navigation" aria-label="main navigation">
                <header className="navbar-menu">
                    <section className="navbar-item">
                        <a href="/" onClick={handleClick}>X</a>
                    </section>
                    <section className="navbar-item navbar-brand">
                        {/* <StaticImage alt="Logo" src="../images/logo_2.png" /> */}
                        <a href="/">ZDM</a>
                    </section>
                </header> 
            </nav>
            <section>
                <ul>
                    {data.map(d => {
                        return ( 
                            <li key={d}>
                                <Card/> 
                            </li>
                        )
                    })}
                </ul>
            </section>
        </main>
    )
};

export default Dropdown;