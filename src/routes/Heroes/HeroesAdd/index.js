import React, {Component} from "react";
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core';
import './index.css';

class HeroesAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heroNameToAdd: '',
            heroValueToAdd: '',
        };
    }

    handleChange = (event, field) => {
        this.setState({[field]: event.target.value});
    };

    render() {
        const {heroNameToAdd, heroValueToAdd} = this.state;
        const {handleAdd} = this.props;
        const heroesAddTextFieldClasses = {
            root: 'HeroesAdd-textField',
        };
        return (
            <div className={'HeroesAdd'}>
                <span>Hero name:</span>
                <TextField
                    InputProps={{
                        classes: heroesAddTextFieldClasses
                    }}
                    size={'small'}
                    value={heroNameToAdd}
                    onChange={(event) => this.handleChange(event, 'heroNameToAdd')}
                    placeholder={'name'}
                    variant="outlined"/>
                <TextField
                    InputProps={{
                        classes: heroesAddTextFieldClasses
                    }}
                    size={'small'}
                    value={heroValueToAdd}
                    onChange={(event) => this.handleChange(event, 'heroValueToAdd')}
                    placeholder={'value'}
                    variant="outlined"/>
                <button onClick={(event) => handleAdd(event, {
                    name: heroNameToAdd,
                    value: heroValueToAdd
                })}>Add
                </button>
            </div>
        );
    }
}

HeroesAdd.propTypes = {
    handleAdd: PropTypes.func.isRequired,
};

export default HeroesAdd;