
function Message(data, user) {
    this.data = data;
    this.user = user;
    this.previous = null;
    this.next = null;
    this.isFocused = false;
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