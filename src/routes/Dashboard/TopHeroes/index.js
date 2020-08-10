import React from "react";
import TopHeroesList from "./TopHeroesList";
import TopHeroesListItem from "./TopHeroesList/TopHeroesListItem";

const TopHeroes = ({ heroes }) => {
    return (
        <div className={'TopHeroes'}>
            <h2>Top Heroes</h2>
            <TopHeroesList>
                {[...heroes].sort(heroCompare).filter((hero, index) => index < 4).map(hero => <TopHeroesListItem
                    name={hero.name} id={hero.id}/>)}
            </TopHeroesList>
        </div>
    );
};

function heroCompare(heroA, heroB) {
    if (heroA.value < heroB.value) {
        return 1;
    } else if (heroA.value > heroB.value) {
        return -1;
    }
    return 0;
}

export default TopHeroes;