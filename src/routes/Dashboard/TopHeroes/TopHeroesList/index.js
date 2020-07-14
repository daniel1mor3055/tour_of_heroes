import React from "react";
import PropTypes from 'prop-types';

const TopHeroesList = ({children}) => {
    return (
        <ul>
            {children}
        </ul>
    );
};

TopHeroesList.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node)
};

export default TopHeroesList;