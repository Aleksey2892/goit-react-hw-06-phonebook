import { combineReducers } from 'redux';
import { ADD, DEL, FILTER } from './contactsTypes';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_ITEMS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactAddValue = (state, payload) => {
  const isCheckDuplicate = state.find(
    el => el.name.toLocaleLowerCase() === payload.name.toLocaleLowerCase(),
  );

  if (isCheckDuplicate) {
    alert(`${payload.name.toUpperCase()} is already in contacts`);
    return [...state];
  }

  payload.id = uuidv4();

  localStorage.setItem('contacts', JSON.stringify([payload, ...state]));

  return [payload, ...state];
};

const contactDelValue = (state, payload) => {
  localStorage.setItem(
    'contacts',
    JSON.stringify(state.filter(({ id }) => id !== payload.contactId)),
  );
  return state.filter(({ id }) => id !== payload.contactId);
};

const itemsReducer = (state = INITIAL_ITEMS, { type, payload }) => {
  switch (type) {
    case ADD:
      return contactAddValue(state, payload);

    case DEL:
      return contactDelValue(state, payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER:
      return (state = payload.value);

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
