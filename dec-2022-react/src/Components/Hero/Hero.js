import React from 'react';
import '../Person.css'
const Hero = ({item}) => {
    const {id, name, status, species, type, gender, image, url} = item;
    return (
        <div className="Hero">
            <img src={image} alt={name}/>
            <div className="Hero_Info">
                <h2>name: {name} (id: {id})</h2>
                <h3>type {type} - status: {status}</h3>
                <div> Species: {species}</div>
                <div>gender: {gender}</div>
                <div className="button">
                    <a href={url} target='_blank'> WebSite</a>
                </div>

            </div>
        </div>
    );
};

export default Hero;