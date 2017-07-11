var React = require('react');
var ReactDOM = require('react-dom');

require('./styles/narrative.css');
require('./styles/skeleton.css');

var App = require('./components/App');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);