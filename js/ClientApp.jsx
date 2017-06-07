// ES6 modules
// below is same as const React = require('react'), and we are including all of React
import React from 'react';
// below we are only including render from 'react-dom' since its the only thing that we need from ReactDOM
import { render } from 'react-dom';

const App = () =>
  <div className="app">
    <div className="landing">
      <h1>Reactflix</h1>
      <input type="text" placeholder="Search" />
      <a>or Browse All</a>
    </div>
  </div>;

render(<App />, document.getElementById('app'));
