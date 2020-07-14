import React, {Component} from "react";
import {TextField} from "@material-ui/core";
import {heroesData} from "../../heroesData/data";

class HeroDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchByName: '',
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
            heroes: heroesData,
            displayedHeroId: id,
            displayedHeroName: name,
            displayedHeroValue: value,
        });
    }

    handleChange = (event) => {
        this.setState({searchByName: event.target.value});
    };

    render() {
        const {searchByName, displayedHeroId, displayedHeroName, displayedHeroValue} = this.state;

        return (
            <div className={'HeroDetails'}>
                <h2>{`${searchByName} Details`}</h2>
                <p>{`id: ${displayedHeroId}`}</p>
                <p>{`value: ${displayedHeroValue}`}</p>
                <p>name:</p>
                <TextField value={displayedHeroName} onChange={this.handleChange} placeholder={'name'}
                           variant="outlined"/>
            </div>
        );
    }
}

export default HeroDetails;