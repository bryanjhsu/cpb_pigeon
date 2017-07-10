var React = require('react');
var ReactDOM = require('react-dom');
var Dialogue = require('./Dialogue.js')


class NarrativeContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      messageList: null
    };

    this.onUploadMarkdown = this.onUploadMarkdown.bind(this);

    this.nextMessageEvent = this.nextMessageEvent.bind(this);
    this.restartEvent = this.restartEvent.bind(this);
    this.prevMessageEvent = this.prevMessageEvent.bind(this);
    this.allMessagesEvent = this.allMessagesEvent.bind(this);
  }

  onUploadMarkdown(event)
  {
    var file = event.target.files[0];
    console.log(file);

    var reader = new FileReader();

    function updateMessagelist(dialogue)
    {
      this.state.messageList = dialogue;
      console.log(this.state.messageList);
      this.setState(this.state);
    }

    updateMessagelist = updateMessagelist.bind(this);
    reader.onload = function(e) {
        var file = this.result;

        var dialogue = parseMarkdownToDialogue(file);
        dialogue.print();
        updateMessagelist(dialogue);

    }
    var text = reader.readAsText(file);
  }

  renderMessages()
  {
    var msgs = this.state.messageList;

    if(msgs!=null)
    {
      if(msgs._length == 0)
      {
        console.log("NULL");
      }
      else
      {
          var currMessage = msgs.curr;
          var msgs = [];
          do
          {
              var mDiv = new MessageDiv(currMessage);
              msgs.unshift(mDiv);
              currMessage = currMessage.previous;
          } 
          while(currMessage != null);  
          return (
            <div className='messagesContainer'>{msgs}</div>
          );
      }
    }
  }

  renderButtons()
  {
    return(
      <div>
      <form action="/action_page.php">
        <input type="file" name="markdown" onChange={this.onUploadMarkdown}>
        </input>
      </form>
      <button className="next round" onClick={this.restartEvent}>&lt;&lt;</button>
      <button className="next round" onClick={this.prevMessageEvent}>&lt;</button>
      <button className="next round" onClick={this.nextMessageEvent}>&gt;</button>
      <button className="next round" onClick={this.allMessagesEvent}>&gt;&gt;</button>
      </div>
    );
  }

  restartEvent()
  {
    if(this.state.messageList != null)
    {
        this.state.messageList.curr = this.state.messageList.head;
    }
    this.setState(this.state);
  }

  nextMessageEvent()
  {
    if(this.state.messageList != null)
    {
      if(this.state.messageList.curr.next != null)
      {
        this.state.messageList.curr = this.state.messageList.curr.next;
      }
      else
      {

      }
    }

    this.setState(this.state);
  }

  prevMessageEvent()
  {
    if(this.state.messageList != null)
    {
      if(this.state.messageList.curr.previous != null)
      {
        this.state.messageList.curr = this.state.messageList.curr.previous;
      }
      else
      {

      }
    }
    this.setState(this.state);
  }

  allMessagesEvent()
  {
    if(this.state.messageList != null)
    {
        this.state.messageList.curr = this.state.messageList.tail;
    }
    this.setState(this.state);
  }

  //scroll to bottom of messages
  updateScroll()
  {
    var element = this.refs.narrativeContainer;
    element.scrollTop = element.scrollHeight;
  }

  renderHeader()
  {
    return(
      <p>Narrative</p>
      );
  }


   handleKeyPress(event){
    console.log(event.key);
    if(event.key == 'Enter'){
      console.log('enter press here! ')
    }
  }

  render() {   
    var msgs = this.state.messageList;
    return(
      //after turning md into ll, go through ll and turn to messages
      <div className = 'wrapper'>
        <div className='headerContainer'>
          {this.renderHeader()}
        </div>
        <div className='uploadContainer'>
          {this.renderButtons()}
        </div>
        <div className='narrativeContainer' ref='narrativeContainer' onKeyDown={this.handleKeyPress}>
            {this.renderMessages()}
        </div>
      </div>
    );
  }

  componentDidUpdate(){
    this.updateScroll();
  }
}

function MessageDiv(msg) {
  var user = msg.user;
  var data = msg.data;
      return (
    <div className = {(user === "bot") ? 'messageLeft' : 'messageRight'}>
      <p>{user+":"} <br /> {data}</p>
    </div>
  );
}

module.exports = NarrativeContainer;

function parseMarkdownToDialogue(file)
{
  //creates a new dialogue (MessageList Object)
  //read first line and first instance of =
  //this sets the title
  //look for ## to find user

  //anything after user is message from that user
  //if no hashtag found again, anything after is 
  ///a new message from same user
  var messageList = new MessageList();
  var lines = file.split('\n');
  var title = "";
  var currUser = "";

  for (var line = 0; line < lines.length; line++) {

    var currLine = lines[line];

    if(line == 0)
    {
      messageList.title = currLine;
    }
    else if(currLine.charAt(0) === "=")
    {
      //
    }
    else
    {
      if(currLine.substring(0,2) === "# ")//user
      {
        currUser = currLine.substring(2);
      } 
      else if(currLine)
      {
        messageList.add(currLine, currUser);
      }
    }
  }
  return messageList;

}

//from who should be name or id?
function Message(data, user) {
    this.data = data;
    this.user = user;
    this.previous = null;
    this.next = null;
}

Message.prototype.print = function()
{
    var msg = "";
    if(this.previous != null)
    {
        if(this.previous.user === this.user)
        {
            msg = " "+this.data;
        }
        else
        {
            msg = this.user + ": " + this.data;
        }
    }
    else
    {
        msg = this.user + ": " + this.data;
    }
    console.log(msg); 
}

function MessageList() {
    this._length = 0;
    this.head = null;
    this.curr = null;
    this.tail = null;

    this.currSpeaker = "";
    this.title = "";
}
 
MessageList.prototype.add = function(value, user) {
    var msg = new Message(value, user);
 
    if (this._length) {
        this.tail.next = msg;
        msg.previous = this.tail;
        this.tail = msg;
    } else {
        this.head = msg;
        this.curr = msg;
        this.tail = msg;
    }

    this._length++;
 
    return msg;
};

MessageList.prototype.print = function() {

    console.log(this.title);

    if(this._length == 0)
    {
        return "this dialogue is empty";
    }
    else
    {
        var currMessage = this.head;
        do
        {
            currMessage.print();
            currMessage = currMessage.next;
        } 
        while(currMessage != null);
        
    }
 
};