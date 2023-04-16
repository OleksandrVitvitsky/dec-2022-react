import React from 'react';
import '../Person.css';

const SimpsonPerson = ({item}) => {
    return (
        <div className="Person">
        <img src={item.photo} alt={item.name}></img>
            <h2><u>{item.name} {item.surname} ({item.age} old)</u></h2>
            <p>{item.info}</p>
        </div>
    );
};

export default SimpsonPerson;