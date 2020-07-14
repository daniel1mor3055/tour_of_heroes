import React from "react";
import PropTypes from 'prop-types';


const HeroesList = ({children}) => {
    return (
        <ul className={'HeroesList'}>
            {children}
        </ul>
    )
};

HeroesList.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node)
};

export default HeroesList;