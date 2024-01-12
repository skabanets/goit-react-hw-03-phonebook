import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookWrapper, Subtitle, Title } from './Phonebook.styled';
import { Filter } from 'components/Filter/Filter';

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterChange = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  resetFiler = () => {
    this.setState({ filter: '' });
  };

  getFileredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFileredContacts();

    return (
      <PhonebookWrapper>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact} />

        <Subtitle>Contacts ({contacts.length})</Subtitle>
        <Filter
          value={filter}
          onChange={this.filterChange}
          onClick={this.resetFiler}
        />
        {contacts.length === 0 ? (
          <p>No contacts</p>
        ) : (
          <Contacts
            contacts={filteredContacts}
            onDelete={this.deleteContact}
            filteredContacts={filteredContacts}
          />
        )}
      </PhonebookWrapper>
    );
  }
}
