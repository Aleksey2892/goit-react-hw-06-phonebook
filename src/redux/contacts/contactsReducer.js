import { combineReducers } from 'redux';
import actionTypes from './contactsTypes';

const INITIAL_ITEMS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactAddValue = (state, payload) => {
  return [payload, ...state];
};

const contactDelValue = (state, payload) => {
  return state.filter(contact => contact.id !== payload);
};

const itemsReducer = (state = INITIAL_ITEMS, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return contactAddValue(state, payload);

    case actionTypes.DEL:
      return contactDelValue(state, payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
