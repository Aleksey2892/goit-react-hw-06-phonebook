import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../redux/contacts/contactsActions';

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

const App = ({ contacts, onAddContact, onRemoveContact, handleFilter }) => {
  // componentDidMount() {
  // const contactsData = localStorage.getItem('contacts');
  // if (contactsData) {
  //   this.setState({ contacts: JSON.parse(contactsData) });
  // }
  // }

  // componentDidUpdate(prevProps, prevState) {
  // if (prevState.contacts !== this.state.contacts) {
  //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  // }
  // }

  // handleAddContact = ({ name, number }) => {
  // const { contacts } = this.state;
  // const isCheckDuplicate = contacts.find(
  //   el => el.name.toLowerCase() === name.toLowerCase(),
  // );
  // const notAdd = () => alert(`${name.toUpperCase()} is already in contacts`);
  // const add = () =>
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, { name, number, id: uuidv4() }],
  //   }));
  // !isCheckDuplicate ? add() : notAdd();
  // };

  // handleRemoveContact = contactId => {
  // this.setState(prevState => {
  //   return {
  //     contacts: prevState.contacts.filter(({ id }) => id !== contactId),
  //   };
  // });
  // };

  const getFilterContacts = () => {
    const { items, filter } = contacts;

    if (filter) {
      return items.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }

    return items;
  };

  const { items } = contacts;

  const isShowFilter = items.length > 1;
  const isShowContacts = items.length > 0;
  const isFilterContacts = getFilterContacts();
  console.log(contacts);

  return (
    <Div>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm onAddContact={onAddContact} />
      <TitleH2>Contacts</TitleH2>
      {isShowFilter && (
        <Filter onFilter={contacts.filter} onChange={handleFilter} />
      )}

      <ContactList
        isShowContacts={isShowContacts}
        contacts={isFilterContacts}
        onRemoveContact={onRemoveContact}
      />
    </Div>
  );
};
const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: ({ name, number }) =>
      dispatch(contactsActions.addContact({ name, number, id: uuidv4() })),

    onRemoveContact: ({ contactId }) =>
      dispatch(contactsActions.delContact({ contactId })),

    handleFilter: ({ target }) =>
      dispatch(contactsActions.filterContacts({ target })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
