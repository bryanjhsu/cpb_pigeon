var React = require('react');
var ReactDOM = require('react-dom');

import { PageHeader } from 'react-bootstrap';


class HeaderContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {   

    return(
      //after turning md into ll, go through ll and turn to messages
      <div className = 'header'>
      	<div className = 'pageHeader' id = "topHeader" > 
      		<img id="hermy" src = "/public/assets/misc/hermy.png" />
      		<p id="app_title"> C H A T T E R B O T</p>
      		
      	</div>

      	<div className = 'pageHeader' id = "bottomHeader">
      	 	HOME > PATH > ETC > TEST NAVIGATION
      	 </div>
      </div>
    );
  }
}

module.exports = HeaderContainer;

