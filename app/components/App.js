var React = require('react');
var MessageContainer = require('./MessageContainer');

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <MessageContainer />
      </div>
    )
  }
}

module.exports = App;