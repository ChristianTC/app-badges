import React from 'react';
import { Link } from 'react-router-dom';
import iconTwitter from '../images/icon-twitter.gif';
import './styles/BadgesList.css';
import Gravatar from './Gravatar';


class BadgesListItem extends React.Component {
    render(){
        return (

                        <div className="BadgesListItem">
                            <Gravatar 
                                className="BadgesListItem__avatar" 
                                email={this.props.badge.email} 
                            />
                            <section className="BadgesListItem__details">

                                <div className="BadgesListItem__name">
                                    {this.props.badge.firstName} {this.props.badge.lastName}
                                </div>
                                <div className="BadgesListItem__twitter">
                                    <img src={iconTwitter} alt="twitter"/>
                                    @{this.props.badge.twitter}
                                </div>
                                <div className="BadgesListItem__jobTitle">
                                    {this.props.badge.jobTitle}
                                </div>
                            </section>
                        </div>
   
        )
        
    }
}


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
            <div className="BadgesList">
              <ul className="list-unstyled">
                {this.props.badges.map(badge => {
                  return (
                    <li key={badge.id}>
                      <Link
                        className="text-reset text-decoration-none"
                        to={`/badges/${badge.id}`}
                      >
                        <BadgesListItem badge={badge} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }
      }
    



export default BadgesList;