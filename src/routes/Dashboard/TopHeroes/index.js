import React, {Component} from "react";
import {heroesData} from '../../../heroesData/data';
import TopHeroesList from "./TopHeroesList";
import TopHeroesListItem from "./TopHeroesList/TopHeroesListItem";

class TopHeroes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heroes: [],
        };
    }

    componentDidMount() {
        this.setState({
            heroes: heroesData.concat(),
        });
    }

    render() {
        const {heroes} = this.state;

        return (
            <div className={'TopHeroes'}>
                <h2>Top Heroes</h2>
                <TopHeroesList>
                    {[...heroes].sort(heroCompare).filter((hero, index) => index < 4).map(hero => <TopHeroesListItem
                        name={hero.name} id={hero.id}/>)}
                </TopHeroesList>
            </div>
        );
    }
}

function heroCompare(heroA, heroB) {
    if (heroA.value < heroB.value) {
        return 1;
    } else if (heroA.value > heroB.value) {
        return -1;
    }
    return 0;
}

export default TopHeroes;