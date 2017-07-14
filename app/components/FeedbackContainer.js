var React = require('react');
var ReactDOM = require('react-dom');

var React = require('react');
var ReactDOM = require('react-dom');

import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';

class FeedbackContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {   

  	let describeText = 
  	"Informed user asks for the $5.99 Mix & Match coupon before adding any food items." 
  	+" User Completes the coupon and immediately proceeds to checkout.";
  	let describeText2= 
  	"Alternate copy options included addressing varying levels of coupon guidance. A.1a, A.1b";

    return(
      //after turning md into ll, go through ll and turn to messages
      <div className = 'wrapper'>
	    <div id='rightContainer'>
	        <div id = "commentsContainer">
	        	<div>
		        	<h1 className = "title">
		        	COMMENTS
		        	</h1>
       			 </div>
		    </div>
		    
        </div> 
      </div>
    );
  }
}


module.exports = FeedbackContainer;
