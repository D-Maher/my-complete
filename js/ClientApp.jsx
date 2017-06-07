// ES6 modules
// same as const React = require('react'), and here we are including all of React
import React from 'react';
// only include render from 'react-dom' since its the only thing that we need from ReactDOM
import { render } from 'react-dom';
// include BrowserRouter, Route, and Switch from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import other components from js/ directory
import Landing from './Landing';
import Search from './Search';

const FourOhFour = () => <h1>404</h1>;

const App = () =>
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>;

render(<App />, document.getElementById('app'));
