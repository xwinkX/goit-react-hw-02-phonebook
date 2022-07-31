import { nanoid } from 'nanoid';
import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends React.Component {

state = {
  contacts:
 [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  
}

  contactFormSubmit = data => {
    const dataContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }
    console.log(dataContact);
    this.setState(prevState => ({
      contacts: [dataContact, ...prevState.contacts],
    }));
    
  };


  render() {
    return (
      <div
        style={{
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 30,
          color: '#010101'
        }}
      >
       <h1>Phonebook</h1>
        <ContactForm onSubmit={this.contactFormSubmit} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  };
};

export default App;