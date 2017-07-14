var React = require('react');

var NarrativeContainer = require('./NarrativeContainer');
var InfoContainer = require('./InfoContainer');
var FeedbackContainer = require('./FeedbackContainer');
var HeaderContainer = require('./HeaderContainer');


class App extends React.Component {
  render() {
    return (
      <div id = 'content' className='container'>

      	<HeaderContainer/>

        
        <section id='left'>
        	<InfoContainer />
        </section>
        

        <div id='middle'>
        	<NarrativeContainer/>
        </div>

        <section id='right'>
          <FeedbackContainer/>

        </section>

      </div>

    )
  }
}

module.exports = App;