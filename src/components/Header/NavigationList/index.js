import React from "react";
import PropTypes from 'prop-types'

const NavigationList = ({children}) => {
    return (
        <ul>
            {children}
        </ul>
    )
}


NavigationList.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
}
export default NavigationList;