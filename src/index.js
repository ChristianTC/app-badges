// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';



const container = document.getElementById('app');

// ReactDOM.render(__what__, __where__);
ReactDOM.render(
    <Badge 
        firstName="Christian" 
        lastName="Tambo"
        avatarUrl="https://www.gravatar.com/avatar?d=identicon"
        jobTitle="Frontend Developer"
        twitter="@christiantambo" 
    />, 
    container
);
