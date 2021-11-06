import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ data }) => {
    return (
        <main className="card">
            <section className="card-image">
                <a className="image is-4by3" href={data.link} target="_blank">
                    <img src={data.image} alt="Placeholder"/>
                </a>
            </section>
            <section className="card-content">
                <p className="content">
                    {data.title} : {data.description}
                </p>
            </section>
            <section className="card-footer">
                <time dateTime="2016-1-1">1 Jan 2016</time>
                <a href={data.github} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon size="lg" icon={['fab', 'github']} />
                </a>  
            </section>
        </main>
    )
};

export default Card;