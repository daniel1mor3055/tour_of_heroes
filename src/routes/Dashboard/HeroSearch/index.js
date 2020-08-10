import React, { Component } from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import { Redirect } from "react-router";

class HeroSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heroToSearch: '',
        };
    }

    handleChange = (event, value) => {
        this.setState({ heroToSearch: value });
    };

    render() {
        const { heroToSearch } = this.state;
        const { heroes } = this.props;

        return (
            <div className={'HeroSearch'}>
                <h3>Hero Search</h3>
                <Autocomplete
                    id="heroSearchAutoCompletee"
                    options={heroes.map(hero => hero.name)}
                    style={{ width: 300 }}
                    onChange={this.handleChange}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            label={"Hero Search"}
                            variant="outlined"/>}
                />
                {heroes.some(hero => hero.name === heroToSearch) ?
                    <Redirect push={'true'}
                              to={`/detail/${heroes.find(hero => hero.name === heroToSearch).id}`}/>
                    : null}
            </div>
        );
    }

}

export default HeroSearch;