var React = require('react');
var ReactDOM = require('react-dom');

import {Button, Tab, Tabs, Checkbox, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';

class FeedbackContainer extends React.Component {

  constructor(props) {
    super();
    this.state = {
      activeTab: props.activeTab || 1
    };

    this.renderComment = this.renderComment.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  renderTabs()
  {
    return (
      <div id="tabDiv">
        <Tabs id = "tabs" activeKey={this.state.activeTab} onSelect={this.handleSelect} className='nav-tabs'>
          <Tab id = "activeTab" className = 'navFeedback'  eventKey={1}  title="Active" >
            {this.renderComments()}
          </Tab>
          <Tab id = "generalTab" className = 'navFeedback' eventKey={2} title="General">
            {this.renderGeneral()}
          </Tab>
        </Tabs>
      </div>
    );
  }

  handleSelect(selectedTab) {
    this.setState({
      activeTab: selectedTab
    });
  }

  //resolveStatus: 1 = need to resolve, 2 = resolved, else, no button
  renderComment(user, comment, resolveStatus)
  {
    return(
      <div id ='commentContainer'>
        <div id = "commentUser">
          <img className = "userImg" src={user.pic} width="20"/>
          <span className = 'commentName'>
          {user.name}
          </span>
        </div>
        <p className = "commentContent">
        {comment}
        </p>
        <div id='commentButtons'>
          <LikeButton/>
          {resolveStatus == 1 &&
            <ResolveButton isResolved = {false}/>
          }

          {resolveStatus == 2 &&
            <ResolveButton isResolved = {true}/>
          }
        </div>
      </div>
      );
  }

  renderComments()
  {
    return (
    <div id='comments'>
      {this.renderComment(danny,"I'm commenting again because I'm still not sure about this whole crust situation.", 1)}
      {this.renderComment(bryan,"Would someone actually respond to that question in that way?", 1)}
      {this.renderComment(emma,"I think people will probably forget to specify what kind of crust they want.", 2)}
      {this.renderComment(emma,"Thanks for resolving my issue!", 0)}
      {this.renderComment(michelle,"I'm commenting again because I'm still not sure about this whole crust situation.", 1)}
    </div>
    );
  }

  renderGeneral()
  {
    return (
    <div id='comments'>
      {this.renderComment(dana,"Generally, this conversation could still use some work.", 1)}
      {this.renderComment(bryan,"Yes, but generally it's generally pretty general.", 2)}
      {this.renderComment(emma,"I like turtles", 0)}
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
                <p id="commentsDescription"> 1 Unresolved Thread</p>
         			</div>
              {this.renderTabs()}
  		    </div>

          <CommentInput/>
  		    
        </div> 
      </div>
    );
  }
}

class CommentInput extends React.Component
{

  render() 
  {
    return(
      <div id = "submitComment">
        <FormGroup controlId="formControlsTextarea">
          <FormControl componentClass="textarea" placeholder="Write comment here..." />
        </FormGroup>
 
        <Checkbox id="cb">
          Require Resolution
        </Checkbox>

        <Button id="submitBtn" className = "button btnHover" type="submit">
        Submit Comment
        </Button>
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
  }
 
  render() {
    if(this.state.liked) { 
        return ( <img className = "like" src="/public/assets/icons/thumbs.png" width="14" onClick={this.onClick}/>);
    } else { 
        return ( <img className = "like" src="/public/assets/icons/thumbs_off.png" width="14" onClick={this.onClick}/>);
    }
  }
}

class ResolveButton extends React.Component
{
  constructor(props) {
    super();
    this.state = { resolved : props.isResolved};

     this.onClick = this.onClick.bind(this);
  }

  onClick()
  {
    if(this.state.resolved)
      this.setState({resolved: false});
    else
      this.setState({resolved: true});
  }
 
  render() {
    if(!this.state.resolved) { 
        return ( 
          <Button id = "resolveBtn" className = "resolveBtn btnHover" bsStyle="primary" bsSize="small" onClick={this.onClick}>
              Resolve
          </Button>
        );
    } else { 
        return (
          <Button id = "resolveBtn" className = "resolvedBtn btnHover" bsStyle="primary" bsSize="small" onClick={this.onClick}>
            Resolved
            <img id = "shareIcon" src="/public/assets/icons/check.png" width="12" /> 
          </Button>
        );
    }
  }
}



module.exports = FeedbackContainer;
