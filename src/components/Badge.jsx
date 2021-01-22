import React, { Fragment } from 'react';

import confLogo from '../images/badge-header.svg';

import './styles/Badge.css';

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Conference Logo" />
                </div>
                <div className="Badge__section-name">
                    <img 
                        className="Badge__avatar" 
                        src="https://www.gravatar.com/avatar?d=identicon" 
                        alt="Avatar"/>
                    <h1>
                        Christian <br/> Tambo
                    </h1>
                </div>
                <div className="Badge__section-info">
                    <h1>Frontend Developer</h1>
                    <div>@ChristianTambo</div>
                </div>
                <div className="Badge__footer">#PlatziConf</div>
            </div>
        )
    }
}


export default Badge;