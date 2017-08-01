
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip'

import key from '../other/keymaster.js'

class NarrativeContainer extends React.Component {

  constructor(props) {
    super();
    this.state = {
      messageList: props.dialogue,
      highlightedIndex: null
    };

    this.renderMessages = this.renderMessages.bind(this);

    //controls narrative playback
    this.nextMessageEvent = this.nextMessageEvent.bind(this);
    this.restartEvent = this.restartEvent.bind(this);
    this.prevMessageEvent = this.prevMessageEvent.bind(this);
    this.allMessagesEvent = this.allMessagesEvent.bind(this);
  
    key('right', this.nextMessageEvent);
    key('up', this.restartEvent);
    key('left', this.prevMessageEvent);
    key('down', this.allMessagesEvent);

   this.updateMessageHighlightedIndex = this.updateMessageHighlightedIndex.bind(this);
  }

  componentWillReceiveProps(newProps)
  {
    this.setState({messageList:newProps.dialogue});
  }

  updateMessageHighlightedIndex(index)
  {
    this.setState({highlightedIndex: index});
  }

  renderMessages()
  {
    let msgList = this.state.messageList;
    let msgs = [];
    let isLastMessage = false;

    if(msgList!=null)
    {
      let currMessage;
      if(msgList.curr.next != null){
        currMessage = msgList.curr.next;
      }
      else{
        currMessage = msgList.curr;
        isLastMessage = true;
      }

      //get current message, and work way backwards to oldest message
      if(currMessage != null)
      {
        while(currMessage.previous != null)
        {
          msgs.unshift(currMessage);

          currMessage = currMessage.previous;
        }  
      }

      //set current message as highlighted if message navigation is used
      //otherwise, highlighted message determined by click
      if(this.state.highlightedIndex < 0 || msgs.length == 1)
      {
        if(isLastMessage)
        {
            this.state.highlightedIndex = msgs.length - 1;
        }
        else
        {
          this.state.highlightedIndex = msgs.length - 2;
        }
      }

      const messageDivs = msgs.map((msg, index) => 
        <MessageDiv
              user={msg.user} 
              data={msg.data}
              isFocused={this.state.highlightedIndex === index}
              index={index}
              indexCallback = {this.updateMessageHighlightedIndex}
              /> 
        );

      return (
        <div className='messagesContainer' ref='messagesContainer'>
          {messageDivs}
          {(isLastMessage) ? (<div id = "emptyDiv" className="emptyMsg"> end of conversation </div>):<div/>}
        </div>
      );
         

    }
  }

  renderButtons()
  {
    return(
      <div className = "buttonNav">

        <Button data-tip data-for='restartTip' className = "button btnHover" bsStyle="primary" bsSize="small" 
        onClick={this.restartEvent}>Restart</Button>
 
        <Button data-tip data-for='prevTip' className = "button btnHover" bsStyle="primary" bsSize="small" 
        id = "previousBtn" onClick={this.prevMessageEvent}>Previous</Button>

        <Button data-tip data-for='nextTip' className = "button btnHover" bsStyle="primary" bsSize="small" 
        onClick={this.nextMessageEvent}>Next</Button>

        <Button data-tip data-for='allTip' className = "button btnHover" bsStyle="primary" bsSize="small" 
        onClick={this.allMessagesEvent}>Show All</Button>

      </div>
    );
  }

  restartEvent()
  {
    if(this.state.messageList)
    {
        this.state.messageList.curr = this.state.messageList.head;
    }
    this.state.highlightedIndex = -1
    this.setState(this.state);
    this.updateScroll();
  }

  nextMessageEvent()
  {
    if(this.state.messageList)
    {
      if(this.state.messageList.curr.next)
      {
        this.state.messageList.curr = this.state.messageList.curr.next;
        console.log(this.state.messageList.curr);
      }
    }
    this.state.highlightedIndex = -1
    this.setState(this.state);
    this.updateScroll();
  }

  prevMessageEvent()
  {
    if(this.state.messageList)
    {
      if(this.state.messageList.curr.previous)
      {
        this.state.messageList.curr = this.state.messageList.curr.previous;
      }
    }
    this.state.highlightedIndex = -1
    this.setState(this.state);
    this.updateScroll();
  }

  allMessagesEvent()
  {
    if(this.state.messageList)
    {
        this.state.messageList.curr = this.state.messageList.tail;
    }
    this.state.highlightedIndex = -1
    this.setState(this.state);
    this.updateScroll();
  }

  //scroll to bottom of messages
  updateScroll()
  {
    var element = this.refs.messagesContainer;
    if(element)
    element.scrollTop = element.scrollHeight;
  }

   handleKeyPress(event)
   {
    console.log(event.key);
    if(event.key == 'Enter'){
      console.log('enter press here! ')
    }
  }

  render() {   
    var msgs = this.state.messageList;
    return(
      <div className = 'wrapper'>
        <div className='narrativeContainer' ref='narrativeContainer' onKeyDown={this.handleKeyPress}>
            {this.state.messageList == null ? <p id="emptyUpload"> Please upload a markdown file with the "Upload New File" button in the bottom left.</p>: <p/>}
            {this.renderMessages()}
        </div>
        <div className='uploadContainer'>
          {this.renderButtons()}
        </div>
      </div>
    );
  }

  componentDidUpdate(){
    //only scroll down if highlightd is at bottemest spot
    if(this.state.messageList && this.state.highlightedIndex === this.state.messageList._length - 2)
    {
      this.updateScroll();
    }
  }
}

class MessageDiv extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      index: props.index,
      user: props.user,
      data: props.data,
      isFocused: props.isFocused
    }

    this.handleMessageClick = this.handleMessageClick.bind(this);
  }

  componentWillReceiveProps(newProps)
  {
    this.setState({isFocused:newProps.isFocused});
  }

  handleMessageClick()
  {
    this.props.indexCallback(this.state.index);
  }

  render() {
    return(
        <div className = "message" key = {this.state.key} id = {(this.state.user === "bot") ? 'messageLeft' : 'messageRight'}>
          <img className = "messageImg" id = {(this.state.user === "bot") ? 'messageImgLeft' : 'messageImgRight'}/>
          <div className = {"messageContent" + (this.state.isFocused ? " messageFocused" : "")}
                id = {(this.state.user === "bot") ? 'messageContentLeft' : 'messageContentRight'}
                onClick = {this.handleMessageClick}>
            <p>{this.state.data}</p>
          </div>
        </div>
      );

  }
}

export default NarrativeContainer;
