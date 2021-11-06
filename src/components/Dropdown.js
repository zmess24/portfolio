import * as React from 'react';
import Card from './Card';

const Dropdown = ({dropDownState, data, handleClick}) => {
    let classNames = dropDownState ? "dropdown show-dropdown" : "dropdown hide-dropdown";
    return (
        <main className={classNames}>
             <nav className="navbar" role="navigation" aria-label="secondary">
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
            <section className="content">
                <h2 id="title">{data.name}</h2>
                <ul>
                    {data.data.map(d => {
                        return ( 
                            <li key={d}>
                                <Card data={d}/> 
                            </li>
                        )
                    })}
                </ul>
            </section>
        </main>
    )
};

export default Dropdown;