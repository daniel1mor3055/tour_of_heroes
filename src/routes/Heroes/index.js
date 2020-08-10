import React from 'react';
import HeroesList from "./HeroesList";
import HeroesListItem from "./HeroesList/HeroesListItem";
import HeroesAdd from "./HeroesAdd";

const Heroes = ({heroes,handleDelete,handleAdd}) => {
        return (
            <div className={'HeroesPage'}>
                <h3>My Heroes</h3>
                <HeroesAdd handleAdd={handleAdd}/>
                <HeroesList>
                    {heroes.map(hero => {
                        const {name, id} = hero;
                        return (
                            <HeroesListItem name={name} id={id} handleDelete={handleDelete}/>
                        );
                    })}
                </HeroesList>
            </div>
        );
}

export default Heroes;