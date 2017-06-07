// ES6 modules
// below is same as const React = require('react'), and we are including all of React
import React from 'react';
// below we are only including render from 'react-dom' since its the only thing that we need from ReactDOM
import { render } from 'react-dom';

// shorthand for calling React.createElement() below
// const ce = React.createElement;

const MyTitle = function(props) {
  // return ce('div', null, ce('h1', { style: { color: props.color } }, props.title)); // this is the same as below, in fact, below gets transpiled to pretty much this

  const style = { color: props.color };
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function() {
  // return ce(
  //   'div',
  //   { id: 'my-first-component' },
  //   ce(MyTitle, { title: 'Game of Thrones', color: 'skyblue' }),
  //   ce(MyTitle, { title: 'Stranger Things', color: 'greenyellow' }),
  //   ce(MyTitle, { title: 'Rick and Morty', color: 'limegreen' }),
  //   ce(MyTitle, { title: 'Silicon Valley', color: 'aquamarine' })
  // );

  return (
    <div id="my-first-component">
      <MyTitle title="Game of Thrones" color="skyblue" />
      <MyTitle title="Stranger Things" color="greenyellow" />
      <MyTitle title="Rick and Morty" color="limegreen" />
      <MyTitle title="Silicon Valley" color="aquamarine" />
    </div>
  );
};

// render(ce(MyFirstComponent), document.getElementById('app'));
render(<MyFirstComponent />, document.getElementById('app'));
