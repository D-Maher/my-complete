// ES6 modules
// same as const React = require('react'), and here we are including all of React
import React from 'react';
// only include render from 'react-dom' since its the only thing that we need from ReactDOM
import { render } from 'react-dom';
// import the Landing component from Landing.jsx
import Landing from './Landing';

const App = () => <div className="app" />;

render(<App />, document.getElementById('app'));
