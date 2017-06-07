// ES6 modules
// same as const React = require('react'), and here we are including all of React
import React from 'react';
// only include render from 'react-dom' since its the only thing that we need from ReactDOM
import { render } from 'react-dom';
// include HashRouter and Route from 'react-router-dom'
import { HashRouter, Route } from 'react-router-dom';
// import other components from js/ directory
import Landing from './Landing';
import Search from './Search';

const App = () =>
  <HashRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
    </div>
  </HashRouter>;

render(<App />, document.getElementById('app'));
