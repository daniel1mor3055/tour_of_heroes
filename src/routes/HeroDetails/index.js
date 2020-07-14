import React, {Component} from "react";
import {heroesData} from "../../heroesData/data";
import GoBack from "../../components/GoBack";

class HeroDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedHeroId: '',
            displayedHeroName: '',
            displayedHeroValue: '',
            heroes: [],
        };
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = +urlParams.get('id');
        const {name, value} = heroesData.find(hero => hero.id === id);
        this.setState({
            heroes: heroesData.concat(),
            displayedHeroId: id,
            displayedHeroName: name,
            displayedHeroValue: value,
        });
    }

    render() {
        const {displayedHeroId, displayedHeroName, displayedHeroValue} = this.state;

        return (
            <div className={'HeroDetails'}>
                <h2>{`${displayedHeroName} Details`}</h2>
                <p>{`id: ${displayedHeroId}`}</p>
                <p>{`value: ${displayedHeroValue}`}</p>
                <GoBack/>
            </div>
        );
    }
}

export default HeroDetails;