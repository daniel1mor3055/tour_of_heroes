import React from "react";
import PropTypes from 'prop-types'

const NavigationList = ({children}) => {
    return (
        <nav>
            {children}
        </nav>
    )
}


NavigationList.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
}
export default NavigationList;