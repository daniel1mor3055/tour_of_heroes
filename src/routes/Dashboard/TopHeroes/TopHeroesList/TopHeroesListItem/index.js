import React from "react";
import PropTypes from 'prop-types';

const TopHeroesListItem = ({name}) => {
    return (
        <li className={'TopHeroesListItem'}>
            <button>{name}</button>
        </li>
    );
};

TopHeroesListItem.propTypes = {
    name: PropTypes.string.isRequired,
};
export default TopHeroesListItem;