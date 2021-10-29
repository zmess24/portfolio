import * as React from 'react';

const Dropdown = ({classes, data, exitClick}) => {
    let classNames = classes ? "dropdown show-dropdown" : "dropdown hide-dropdown";

    let handleClick = (e) => {
        e.preventDefault();
        exitClick(false);
    }

    return (
        <nav className={classNames}>
            <h1>This is a Dropdown.</h1>
            <p onClick={handleClick}>X</p>
        </nav>
    )
};

export default Dropdown;