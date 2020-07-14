import React from "react";
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";


const HeroesListItem = ({name, id, handleDelete}) => {
    return (
        <li className={'HeroesListItem'}>
            <NavLink to={`/detail?id=${id}`}>
                <span>{id}</span>
                {name}
            </NavLink>
            <button className={'Button-danger'} onClick={(event) => handleDelete(event, id)}>Delete</button>
        </li>
    );
};

HeroesListItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default HeroesListItem;