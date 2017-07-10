var React = require('react');
var NarrativeContainer = require('./NarrativeContainer');

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <NarrativeContainer />
      </div>
    )
  }
}

module.exports = App;