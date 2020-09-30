import { combineReducers } from 'redux';
import { add, del, filter } from './contactsTypes';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case add:
      const isCheckDuplicate = state.find(
        el => el.name.toLocaleLowerCase() === payload.name.toLocaleLowerCase(),
      );
      function notAdd() {
        return alert(`${payload.name.toUpperCase()} is already in contacts`);
      }
      console.log(isCheckDuplicate);
      return [payload, ...state];

    case del:
      return state;

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case filter:
      return (state = payload.value);

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

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
