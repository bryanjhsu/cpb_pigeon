var React = require('react');
var ReactDOM = require('react-dom');

var React = require('react');
var ReactDOM = require('react-dom');

import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';

class FeedbackContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      
    };
  }

  renderTabs()
  {
    return (
      <div>
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} className='nav-tabs'>
          <Tab className = 'navFeedback' eventKey={1} title="Active">

          {this.renderComments()}
          </Tab>
          <Tab className = 'navFeedback' eventKey={2} title="General">
            {this.renderComments()}

          </Tab>
      </Tabs>
      </div>
    );
  }

  renderComments()
  {
    return (
    <div id='comments'>
      <div id ='commentContainer'>
        <div id = "commentUser">
          <img className = "commentImg"/>
          <span className = 'commentName'>
          Danny Hawk
          </span>
        </div>
        <p className = "commentContent">
        I'm commenting again because I'm still not sure about this whole crust situation.
        </p>
        <div id='commentButtons'>
          buttons
        </div>
      </div>

      <div id ='commentContainer'>
        <div id = "commentUser">
          <img className = "commentImg"/>
          <span className = 'commentName'>
          Bryan Hsu
          </span>
        </div>
        <p className = "commentContent">
        Would someone actually respond to that question in that way?
        </p>
        <div id='commentButtons'>
          buttons
        </div>
      </div>

      <div id ='commentContainer'>
        <div id = "commentUser">
          <img className = "commentImg"/>
          <span className = 'commentName'>
          Emma Davis
          </span>
        </div>
        <p className = "commentContent">
        I think people will probably forget to specify what kind of crust they want.
        </p>
        <div id='commentButtons'>
          buttons
        </div>
      </div>

      <div id ='commentContainer'>
        <div id = "commentUser">
          <img className = "commentImg"/>
          <span className = 'commentName'>
          Emma Davis
          </span>
        </div>
        <p className = "commentContent">
        I think people will probably forget to specify what kind of crust they want.
        </p>
        <div id='commentButtons'>
          buttons
        </div>
      </div>
    </div>
    );
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

            {this.renderTabs()}
		    </div>
		    
        </div> 
      </div>
    );
  }
}

function handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
}


module.exports = FeedbackContainer;
