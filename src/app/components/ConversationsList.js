import React from 'react';
import moment from 'moment';

import ConversationPreview from './ConversationPreview.js';
import MessageFilter from './conversation-item/MessageFilter.js';


export default class ConversationsList extends React.Component {
  constructor(props) {
    super();
  }

  // Filter message from conversation's sender
  filter(nickname) {
    return (
      function filterMessageBySender(obj) {
        if ('from' in obj && obj.from === nickname) {
          return true;
        }
      }
    )
  }

  render() {
   const conversationName = this.props.people.map(person => { //filteredPeople.map(person => {
      // find messages by 'person' 
      const name = person.name;
      const messagesByCurrentSender = this.props.messages.filter( this.filter(name) );
      // find last written message and 'time ago' was written
      const lastMsg = messagesByCurrentSender[messagesByCurrentSender.length - 1]
      var formattedDate = moment(lastMsg.date, 'DD/MM/YYYY hh:mm').fromNow();
      
      return (
        <ConversationPreview key={person.id} id={person.id} name={person.name} pic={person.pic} dateMsg={formattedDate} bodyMsg={lastMsg.body} />
      )
    });

    return (
      <div>
        
        
        <header>
          <h1> Conversations </h1>
        </header>
        <section>
            <MessageFilter onApplyFilter={this.props.handleMessageFilter} />
        </section>
        <ul>
          {conversationName}
        </ul>
        <footer>
            <h1> End of Conversations </h1>
        </footer>
      </div>
    )
  }

}


ConversationsList.propTypes = {
  people: React.PropTypes.array.isRequired,
  messages: React.PropTypes.array.isRequired
}

