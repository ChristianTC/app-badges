import React from 'react';
import { Link } from 'react-router-dom';
import iconTwitter from '../images/icon-twitter.gif';
import './styles/BadgesList.css';
import Gravatar from './Gravatar';
class BadgesList extends React.Component{

    render() {
        if (this.props.badges.length === 0 ) {
            return (
                <div>
                    <h3>Didn't find any badge</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li className="BadgesListItem" key={badge.id}>
                            <Gravatar 
                                className="BadgesListItem__avatar" 
                                email={badge.email} 
                            />
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