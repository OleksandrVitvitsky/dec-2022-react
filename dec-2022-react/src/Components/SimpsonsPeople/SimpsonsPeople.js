import React from 'react';
import {simpsons} from "../Arrays";
import SimpsonPerson from "../SimpsonPerson/SimpsonPerson";
import './SimpsonsPeople.css';
const SimpsonsPeople = () => {

    return (
        <div className="SP-Simpsons">
            {
                simpsons.map(
                    (value, index) =>
                    (<SimpsonPerson item={value} key={index}/>)
                )
            }
        </div>
    );
};

export default SimpsonsPeople;