// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';



const container = document.getElementById('app');

// ReactDOM.render(__what__, __where__);
ReactDOM.render(
    <Badges />, 
    container
);
