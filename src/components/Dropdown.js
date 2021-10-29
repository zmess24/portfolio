import * as React from 'react';

const Dropdown = ({dropDownState, data, handleClick}) => {
    let classNames = dropDownState ? "dropdown show-dropdown" : "dropdown hide-dropdown";

    return (
        <nav className={classNames}>
            <h1>This is a Dropdown.</h1>
            <a href="/" onClick={handleClick}>X</a>
        </nav>
    )
};

export default Dropdown;