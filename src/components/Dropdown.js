import * as React from 'react';
import Card from './Card';

const Dropdown = ({dropDownState, data, handleClick}) => {
    let classNames = dropDownState ? "dropdown show-dropdown" : "dropdown hide-dropdown";
    console.log(data)
    return (
        <nav className={classNames}>
            <section>
                <a href="/" onClick={handleClick}>X</a>
            </section>
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
        </nav>
    )
};

export default Dropdown;