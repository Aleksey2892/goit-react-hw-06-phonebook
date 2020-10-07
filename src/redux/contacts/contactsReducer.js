import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import contactsActions from './contactsActions';

const INITIAL_ITEMS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const filterContacts = (_, { payload }) => payload;
const addContact = (state, { payload }) => [payload, ...state];
const delContact = (state, { payload }) => {
  return state.filter(contact => contact.id !== payload);
};

const itemsReducer = createReducer(INITIAL_ITEMS, {
  [contactsActions.addContact]: addContact,
  [contactsActions.delContact]: delContact,
});
const filterReducer = createReducer('', {
  [contactsActions.filterContacts]: filterContacts,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
