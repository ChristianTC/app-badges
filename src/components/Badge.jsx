import React, { Fragment } from 'react';

import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <img src={confLogo} alt="Conference Logo" />
                </div>
                <div>
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                    <h1>
                        Christian <br/> Tambo
                    </h1>
                </div>
                <div>
                    <p>Frontend Developer</p>
                    <p>@ChristianTambo</p>
                    <p>#PlatziConf</p>
                </div>
            </Fragment>
        )
    }
}


export default Badge;