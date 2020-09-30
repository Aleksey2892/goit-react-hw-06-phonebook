import React, { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const Div = styled.div`
  margin: 0 auto;
  padding: 10px 10px;
  max-width: 500px;
`;

const TitleH1 = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;
const TitleH2 = styled(TitleH1)``;

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsData = localStorage.getItem('contacts');

    if (contactsData) {
      this.setState({ contacts: JSON.parse(contactsData) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = ({ name, number }) => {
    const { contacts } = this.state;

    const isCheckDuplicate = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase(),
    );

    const notAdd = () => alert(`${name.toUpperCase()} is already in contacts`);
    const add = () =>
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { name, number, id: uuidv4() }],
      }));

    !isCheckDuplicate ? add() : notAdd();
  };

  handleRemoveContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  handleFilter = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;

    const isShowFilter = contacts.length > 1;
    const isShowContacts = contacts.length > 0;
    const filterContacts = this.getFilterContacts();

    return (
      <Div>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm onAddContact={this.handleAddContact} />

        <TitleH2>Contacts</TitleH2>
        {isShowFilter && (
          <Filter filter={filter} onChange={this.handleFilter} />
        )}

        <ContactList
          isShowContacts={isShowContacts}
          contacts={filterContacts}
          onRemoveContact={this.handleRemoveContact}
        />
      </Div>
    );
  }
}
