import { add, del, filter } from './contactsTypes';

const addContact = contact => {
  return {
    type: add,
    payload: {
      contact,
    },
  };
};

const delContact = contact => {
  return {
    type: del,
    payload: {
      contact,
    },
  };
};

const filterContacts = filterValue => {
  return {
    type: filter,
    payload: {
      filterValue,
    },
  };
};

export default { addContact, delContact, filterContacts };
