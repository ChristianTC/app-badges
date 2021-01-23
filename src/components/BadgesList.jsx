import React from 'react';
import iconTwitter from '../images/icon-twitter.gif';
import './styles/BadgesList.css';
class BadgesList extends React.Component{

    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li className="BadgesListItem" key={badge.id}>
                            <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt=""/>
                            <div>
                                <div className="BadgesListItem__name">
                                    {badge.firstName} {badge.lastName}
                                </div>
                                <div className="BadgesListItem__twitter">
                                    <img src={iconTwitter} alt="twitter"/>
                                    @{badge.twitter}
                                </div>
                                <div className="BadgesListItem__jobTitle">
                                    {badge.jobTitle}
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }

}

export default BadgesList;