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
    return(
      //after turning md into ll, go through ll and turn to messages
      <div className = 'wrapper'>
	    <div id='rightContainer'>
	        <div id = "commentsContainer">
	        	<div id ="commentsTop">
		        	<h1 className = "title">
		        	   COMMENTS
		        	</h1>

              <p id="commentsDescription"/>

       			</div>

            <div id="commentsMain">
              <div id="commentsContainer"/>
              <div id="commentInput"/>
              <btn id="submitComment"/>

            </div>
		    </div>
		    
        </div> 
      </div>
    );
  }
}


module.exports = FeedbackContainer;
