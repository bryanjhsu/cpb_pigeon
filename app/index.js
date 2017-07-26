var React = require('react');
var ReactDOM = require('react-dom');
require('./styles/narrative.css');
require('./styles/info.css');
require('./styles/skeleton.css');
require('./styles/header.css');
require('./styles/feedback.css');

require('./styles/button.css');

var App = require('./components/App');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);