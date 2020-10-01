import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../redux/contacts/contactsActions';
import PropTypes from 'prop-types';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

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

const App = ({ contacts, onAddContact, onRemoveContact, onFilter }) => {
  const getFilterContacts = ({ items, filter }) => {
    if (filter) {
      return items.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
    return items;
  };

  const isShowFilter = contacts.items.length > 1;
  const isShowContacts = contacts.items.length > 0;
  const isFilterContacts = getFilterContacts(contacts);

  return (
    <Div>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm onAddContact={onAddContact} />

      <TitleH2>Contacts</TitleH2>
      {isShowFilter && (
        <Filter filterValue={contacts.filter} onFilter={onFilter} />
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
  const pageLoadContacts = localStorage.getItem('contacts');

  if (pageLoadContacts) {
    state.contacts.items = JSON.parse(pageLoadContacts);
  }

  return {
    contacts: state.contacts,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddContact: ({ name, number }) =>
//       dispatch(contactsActions.addContact({ name, number, id: uuidv4() })),

//     onRemoveContact: id => dispatch(contactsActions.delContact(id)),

//     onFilter: ({ target }) =>
//       dispatch(contactsActions.filterContacts({ target })),
//   };
// };

const mapDispatchToProps = {
  onAddContact: contactsActions.addContact,
  onRemoveContact: contactsActions.delContact,
  onFilter: contactsActions.filterContacts,
};

App.propTypes = {
  contacts: PropTypes.exact({
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ).isRequired,
    filter: PropTypes.string.isRequired,
  }).isRequired,
  onAddContact: PropTypes.func.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
