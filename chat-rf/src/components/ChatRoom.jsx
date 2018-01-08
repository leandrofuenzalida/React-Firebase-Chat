import React, { Component } from 'react';

class ChatRoom extends Component {
  constructor(){
    super();
    this.state = {
      messages: [
        {id:0, text:'text 1'},
        {id:1, text:'text 2'},
        {id:2, text:'text 3'}
      ]
    }
  }

  updateMessage(e){
    console.log(e.target.value);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('enter');
  }

  render () {
    const { messages } = this.state;
    const messagesList = messages.map(message => {
      return <li key={message.id}>{message.text}</li>
    });

    return ( 
      <div>
        <ol>
          { messagesList }
        </ol>
        <form onSubmit ={this.handleSubmit}>
          <input 
            type="text"
            onChange={this.updateMessage}
          />
        </form>      
      </div>
    )
  }
}

export default ChatRoom;