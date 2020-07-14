import React from "react";
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationListItem = ({name, path}) => {
    return (
        <li>
            <NavLink to={path}>{name}</NavLink>
        </li>
    );
};

NavigationListItem.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default NavigationListItem;