import React from 'react'
import logo from '../images/logo.svg';
import './styles/NotFound.css'
function NotFound() {
    return (
        <div className="NotFound">
            <div className="NotFound__container">
                <div className="NotFound__text">
                    404 <br/> NOT FOUND
                </div>
                <img className="NotFound__img" src={logo} alt=""/>
            </div>
        </div>
    )
}

export default NotFound
