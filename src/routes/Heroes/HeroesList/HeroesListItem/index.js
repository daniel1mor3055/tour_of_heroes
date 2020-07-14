import React from "react";
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";


const HeroesListItem = ({name, id}) => {
    return (
        <li className={'HeroesListItem'}>
            <NavLink to={`/detail?id=${id}`}>{name}</NavLink>
            <button>X</button>
        </li>
    );
};

HeroesListItem.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node)
};

export default HeroesListItem;