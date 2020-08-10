import React, { Component } from "react";
import GoBack from "../../components/GoBack";

class HeroDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedHeroId: '',
            displayedHeroName: '',
            displayedHeroValue: '',
        };
    }

    componentDidMount() {
        const { heroes } = this.props;
        const pathSplit = window.location.pathname.split('/');
        const id = +pathSplit[pathSplit.length - 1];
        const { name, value } = heroes.find(hero => hero.id === id);
        this.setState({
            displayedHeroId: id,
            displayedHeroName: name,
            displayedHeroValue: value,
        });
    }

    render() {
        const { displayedHeroId, displayedHeroName, displayedHeroValue } = this.state;

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