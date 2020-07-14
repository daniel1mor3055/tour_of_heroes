import React from "react";
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

const GoBack = ({history}) => {
    return (
        <button className={'GoBack'} onClick={history.goBack}>Go Back</button>
    );
};

GoBack.propTypes = {
    history: PropTypes.object.isRequired
};

export default withRouter(GoBack);