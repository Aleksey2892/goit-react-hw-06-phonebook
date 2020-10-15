import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;

const getFilterValue = state => state.contacts.filter;

const getWithFilterContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    const toLowerCaseFilter = filter.toLowerCase();

    if (filter) {
      return contacts.filter(item =>
        item.name.toLowerCase().includes(toLowerCaseFilter),
      );
    } else {
      return contacts;
    }
  },
);

const getContactById = (state, contactId) => {
  const contacts = getContacts(state);

  return contacts.find(item => contactId === item.id);
};

export default {
  getContacts,
  getWithFilterContacts,
  getContactById,
  getFilterValue,
};
