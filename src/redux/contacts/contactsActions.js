import { add, del, filter } from './contactsTypes';

const addContact = ({ name, number, id }) => {
  return {
    type: add,
    payload: {
      id,
      name,
      number,
    },
  };
};

const delContact = contactId => {
  return {
    type: del,
    payload: {
      contactId,
    },
  };
};

const filterContacts = ({ target }) => {
  return {
    type: filter,
    payload: {
      value: target.value,
    },
  };
};

export default { addContact, delContact, filterContacts };
