var React = require('react');
var ReactDOM = require('react-dom');

var React = require('react');
var ReactDOM = require('react-dom');

import {Button} from 'react-bootstrap';
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
      <div id="tabDiv">
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} className='nav-tabs'>
          <Tab id = "activeTab" className = 'navFeedback' activeKey eventKey={1} 
          title="Active" >

          {this.renderComments()}
          </Tab>
          <Tab id = "generalTab" className = 'navFeedback' eventKey={2} title="General">
            {this.renderGeneral()}

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
          <img className = "userImg" src="/public/assets/misc/user3.png" width="20"/>
          <span className = 'commentName'>
          Danny Hawk
          </span>
        </div>
        <p className = "commentContent">
        I'm commenting again because I'm still not sure about this whole crust situation.
        </p>
        <div id='commentButtons'>
          <LikeButton/>
          <Button id = "resolveBtn" className = "resolveBtn btnHover" bsStyle="primary" bsSize="small">
                Resolve
            </Button>
        </div>
      </div>

      <div id ='commentContainer'>
        <div id = "commentUser">
          <img className = "userImg" src="/public/assets/misc/user1.png" width="20"/>
          <span className = 'commentName'>
          Bryan Hsu
          </span>
        </div>
        <p className = "commentContent">
        Would someone actually respond to that question in that way?
        </p>
        <div id='commentButtons'>
          <LikeButton/>
          <Button id = "resolveBtn" className = "resolveBtn btnHover" bsStyle="primary" bsSize="small">
                Resolve
            </Button>
        </div>
      </div>

      <div id ='commentContainer'>
        <div id = "commentUser">
          <img className = "userImg" src="/public/assets/misc/user4.png" width="20"/>
          <span className = 'commentName'>
          Emma Davis
          </span>
        </div>
        <p className = "commentContent">
        I think people will probably forget to specify what kind of crust they want.
        </p>
        <div id='commentButtons'>
          <LikeButton/>
          <Button id = "resolveBtn" className = "resolvedBtn btnHover" bsStyle="primary" bsSize="small">
                Resolved
                <img id = "shareIcon" src="/public/assets/icons/check.png" width="12" /> 
            </Button>
        </div>
      </div>

      <div id ='commentContainer'>
        <div id = "commentUser">
          <img className = "userImg" src="/public/assets/misc/user4.png" width="20"/>
          <span className = 'commentName'>
          Emma Davis
          </span>
        </div>
        <p className = "commentContent">
        Thanks for resolving my issue! 
        </p>
        <div id='commentButtons'>
          <LikeButton/>
        </div>
      </div>
    </div>
    );
  }

  renderGeneral()
  {
    return (
    <div id='comments'>
      <div id ='commentContainer'>
        <div id = "commentUser">
          <img className = "userImg" src="/public/assets/misc/user5.png" width="20"/>
          <span className = 'commentName'>
          Michelle Hessell
          </span>
        </div>
        <p className = "commentContent">
        Generally, this conversation could still use some work.
        </p>
         <div id='commentButtons'>
          <LikeButton/>
          <Button id = "resolveBtn" className = "resolveBtn btnHover" bsStyle="primary" bsSize="small">
                Resolve
            </Button>
        </div>
      </div>

      <div id ='commentContainer'>
        <div id = "commentUser">
          <img className = "userImg" src="/public/assets/misc/user1.png" width="20"/>
          <span className = 'commentName'>
          Bryan Hsu
          </span>
        </div>
        <p className = "commentContent">
        I agree. But generally it is pretty good.
        </p>
         <div id='commentButtons'>
         <LikeButton />
          <Button id = "resolveBtn" className = "resolvedBtn btnHover" bsStyle="primary" bsSize="small">
                Resolved
                <img id = "shareIcon" src="/public/assets/icons/check.png" width="12" /> 
            </Button>
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

            {this.renderTabs()}
		    </div>
		    
        </div> 
      </div>
    );
  }
}

class LikeButton extends React.Component
{

  constructor() {
    super();
    this.state = { liked : false};

     this.onClick = this.onClick.bind(this);
  }

  onClick()
  {
    if(this.state.liked)
      this.setState({liked: false});
    else
      this.setState({liked: true});

    console.log(this.state.liked);
  }
 
  render() {

     if(this.state.liked) { 
            return ( <img className = "like" src="/public/assets/icons/thumbs.png" width="14" onClick={this.onClick}/>);
        } else { 
            return ( <img className = "like" src="/public/assets/icons/thumbs_off.png" width="14" onClick={this.onClick}/>);
        }
  }
}


function handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
}


module.exports = FeedbackContainer;
