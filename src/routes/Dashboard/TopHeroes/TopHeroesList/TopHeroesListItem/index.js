import React from "react";
import PropTypes from 'prop-types';
import './index.css';
import {NavLink} from "react-router-dom";

const TopHeroesListItem = ({name, id}) => {
    return (
        <div className={'TopHeroesListItem'}>
            <NavLink to={`/detail?id=${id}`}>{name}</NavLink>
        </div>
    );
};

TopHeroesListItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};
export default TopHeroesListItem;