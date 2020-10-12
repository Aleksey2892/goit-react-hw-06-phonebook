import axios from 'axios';
import contactsActions from './contactsActions';

axios.defaults.baseURL = 'http://localhost:2000';

const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch(error => dispatch(contactsActions.fetchContactsError(error)));
};

const addContact = contactData => dispatch => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post('/contacts', { ...contactData })
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const delContact = contactId => dispatch => {
  dispatch(contactsActions.delContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(contactsActions.delContactSuccess(contactId)))
    .catch(error => dispatch(contactsActions.delContactError(error)));
};

export default { fetchContacts, addContact, delContact };
