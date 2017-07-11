var React = require('react');
var NarrativeContainer = require('./NarrativeContainer');

class App extends React.Component {
  render() {
    return (
      <div id = 'content' className='container'>

      	<header>
			<h1>CHATBOT PROTOTYPER</h1>
		</header>

        <section id='left'>
        	INFO CONTAINER

        </section>
        

        <div id='middle'>
        NARRATIVE
        	<NarrativeContainer/>

        </div>

        <section id='right'>
        FEEDBACK CONTAINER

        </section>

      </div>

    )
  }
}

module.exports = App;