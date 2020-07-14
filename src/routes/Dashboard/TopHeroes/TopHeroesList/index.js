import React from "react";
import PropTypes from 'prop-types';
import './index.css'
const TopHeroesList = ({children}) => {
    return (
        <nav className={'TopHeroes-list'}>
            {children}
        </nav>
    );
};

TopHeroesList.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node)
};

export default TopHeroesList;