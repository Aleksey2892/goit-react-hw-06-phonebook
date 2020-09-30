// import { combineReducers } from 'redux';
import { add, del, filter } from './contactsTypes';

const INITIAL_ITEMS = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsReducer = (state = { ...INITIAL_ITEMS }, { type, payload }) => {
  switch (type) {
    case add:
      return state.contacts.items.push(payload.contact);

    case del:
      return state;

    default:
      return state;
  }
};

export default contactsReducer;
