import { ADD, DEL, FILTER } from './contactsTypes';

const addContact = ({ name, number, id }) => {
  return {
    type: ADD,
    payload: {
      id,
      name,
      number,
    },
  };
};

const delContact = contactId => {
  return {
    type: DEL,
    payload: {
      contactId,
    },
  };
};

const filterContacts = ({ target }) => {
  return {
    type: FILTER,
    payload: {
      value: target.value,
    },
  };
};

export default { addContact, delContact, filterContacts };
