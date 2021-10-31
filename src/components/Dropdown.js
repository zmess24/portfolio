import * as React from 'react';
import Card from './Card';

const Dropdown = ({dropDownState, data, handleClick}) => {
    let classNames = dropDownState ? "dropdown show-dropdown" : "dropdown hide-dropdown";
    console.log(data)
    return (
        <main className={classNames}>
            <nav>
                <a href="/" onClick={handleClick}>X</a>
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