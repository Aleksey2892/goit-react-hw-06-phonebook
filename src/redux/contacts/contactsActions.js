import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
const delContact = createAction('contacts/del');
const filterContacts = createAction('contacts/filter', ({ target }) => ({
  payload: target.value,
}));

// const addContact = ({ name, number }) => ({
//   type: actionTypes.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const delContact = contactId => ({
//   type: actionTypes.DEL,
//   payload: {
//     contactId,
//   },
// });

// const filterContacts = ({ target }) => ({
//   type: actionTypes.FILTER,
//   payload: {
//     value: target.value,
//   },
// });

export default { addContact, delContact, filterContacts };
