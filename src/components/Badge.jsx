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
                        src={this.props.avatarUrl} 
                        alt="Avatar"/>
                    <h1>
                        {this.props.firstName || 'firstname'} <br/> {this.props.lastName || 'lastname'}
                    </h1>
                </div>
                <div className="Badge__section-info">
                    <h1>{this.props.jobTitle}</h1>
                    <div>{this.props.twitter}</div>
                </div>
                <div className="Badge__footer">#PlatziConf</div>
            </div>
        )
    }
}


export default Badge;