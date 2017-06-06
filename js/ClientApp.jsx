// ES6 modules
// below is same as const React = require('react'), and we are including all of 'react'
import React from 'react';
// below we are only including render from 'react-dom' since its the only thing that we need
import { render } from 'react-dom';

// shorthand for calling React.createElement() below
const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Game of Thrones', color: 'yellowgreen' }),
    ce(MyTitle, { title: 'Stranger Things', color: 'greenyellow' }),
    ce(MyTitle, { title: 'Rick and Morty', color: 'limegreen' }),
    ce(MyTitle, { title: 'Silicon Valley', color: 'aquamarine' })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
