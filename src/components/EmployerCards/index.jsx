import React from 'react';
import './employer.scss'

import template from './EmployerCards.pug';

class EmployerCard extends React.Component {
    render() {
        return template.call(this, {});
    }
}

export default EmployerCard;
