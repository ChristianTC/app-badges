// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const element = <h1>Hello, Platzi Badges!</h1>;

// React.create.element TEST
// const element = React.createElement(
//     'a',
//     { href: 'https://platzi.com'}, 
//     'Children'
//     );

const NAME = 'Christian';
const jsx = (
    <div>
        <h1>Hola, soy {NAME}</h1>
        <p>I'm frontend developer</p>
    </div>
);
const container = document.getElementById('app');

// ReactDOM.render(__what__, __where__);
ReactDOM.render(jsx, container);
