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
      		<p id="app_title"> P I G E O N</p>
      		
      	</div>

      	<div className = 'pageHeader' id = "bottomHeader">
      	 	HOME >
      	 	<img id="brand_logo" src = "/public/assets/dominos/logo_dominos.png" width="20" />
      	 	DOMINO'S > COUPONS: LOYALTY > LOYALTY A.1 HAPPY PATH
      	 </div>

      	 <hr className = 'headerSeparator'/>
      </div>
    );
  }
}

module.exports = HeaderContainer;

