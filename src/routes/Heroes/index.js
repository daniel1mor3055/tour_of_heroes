import React, {Component} from 'react';
import {heroesData} from "../../heroesData/data";
import HeroesList from "./HeroesList";
import HeroesListItem from "./HeroesList/HeroesListItem";
import HeroesAdd from "./HeroesAdd";

class Heroes extends Component {
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

    handleDelete = (event, id) => {
        const {heroes} = this.state;
        const newHeroes = heroes.filter(hero => hero.id !== id);
        this.setState({
            heroes: newHeroes,
        });
    };

    handleAdd = (event, newHero) => {
        const {heroes} = this.state;
        const heroWithMaxId = heroes.reduce((prev, current) => (prev.id > current.id) ? prev : current);
        this.setState({
            heroes: heroes.concat({
                id: heroWithMaxId.id + 1,
                ...newHero
            })
        });
    };

    render() {
        const {heroes} = this.state;

        return (
            <div className={'HeroesPage'}>
                <h3>My Heroes</h3>
                <HeroesAdd handleAdd={this.handleAdd}/>
                <HeroesList>
                    {heroes.map(hero => {
                        const {name, id} = hero;
                        return (
                            <HeroesListItem name={name} id={id} handleDelete={this.handleDelete}/>
                        );
                    })}
                </HeroesList>
            </div>
        );
    }
}

export default Heroes;