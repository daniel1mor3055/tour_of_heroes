import React from "react";
import GoBack from "../../components/GoBack";

const HeroDetails = ({ heroes }) => {
    const pathSplit = window.location.pathname.split('/');
    const id = +pathSplit[pathSplit.length - 1];
    const { name, value } = heroes.find(hero => hero.id === id);

    return (
        <div className={'HeroDetails'}>
            <h2>{`${name} Details`}</h2>
            <p>{`id: ${id}`}</p>
            <p>{`value: ${value}`}</p>
            <GoBack/>
        </div>
    );
};

export default HeroDetails;