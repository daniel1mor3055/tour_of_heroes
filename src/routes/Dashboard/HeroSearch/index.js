import React, {Component} from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';
import {TextField} from '@material-ui/core';
import {heroesData} from "../../../heroesData/data";
import {Redirect} from "react-router";

class HeroSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heroToSearch: '',
            heroesOptions: [],
        };
    }

    componentDidMount() {
        this.setState({
            heroesOptions: heroesData,
        });
    }

    handleChange = (event, value) => {
        this.setState({heroToSearch: value});
    };

    render() {
        const {heroToSearch, heroesOptions} = this.state;

        return (
            <div className={'HeroSearch'}>
                <h2>Hero Search</h2>
                <Autocomplete
                    id="heroSearchAutoCompletee"
                    options={heroesOptions.map(hero => hero.name)}
                    style={{width: 300}}
                    onChange={this.handleChange}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            label={"Hero Search"}
                            variant="outlined"/>}
                />
                {heroesOptions.some(hero => hero.name === heroToSearch) ?
                    <Redirect
                        to={`/detail?id=${heroesOptions.find(hero => hero.name === heroToSearch).id}`}/>
                    : null}
            </div>
        );
    }

}

export default HeroSearch;