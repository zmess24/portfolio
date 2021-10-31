import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = () => {
    return (
        <div className="card">
            <section className="card-image">
                <a className="image is-4by3">
                    <img src="http://via.placeholder.com/360x270" alt="Placeholder"/>
                </a>
            </section>
            <section className="card-content">
                <p className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                </p>
            </section>
            <section className="card-footer">
                <time dateTime="2016-1-1">1 Jan 2016</time>
                <a href="https://github.com/zmess24" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon size="lg" icon={['fab', 'github']} />
                </a>  
            </section>
        </div>
    )
};

export default Card;