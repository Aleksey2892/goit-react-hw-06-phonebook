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

export default { addContact, delContact, filterContacts };
