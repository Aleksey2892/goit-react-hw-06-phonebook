import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';

import PropTypes from 'prop-types';

import s from '../../styled';

const ContactList = ({ contacts, onRemoveContact }) => {
  const isShowContacts = contacts.length > 0;

  return (
    <>
      {isShowContacts && (
        <s.Ul>
          {contacts.map(({ id, name, number }) => (
            <s.liItem key={id}>
              {name}: {number}
              <s.BtnRemove type="button" onClick={() => onRemoveContact(id)}>
                Delete
              </s.BtnRemove>
            </s.liItem>
          ))}
        </s.Ul>
      )}

      {!isShowContacts && <p>No contacts in data :(</p>}
    </>
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const lowerCaseFilter = filter.toLowerCase();

  const getWithFilterContacts = () => {
    if (filter) {
      return items.filter(item =>
        item.name.toLowerCase().includes(lowerCaseFilter),
      );
    } else {
      return items;
    }
  };

  return {
    contacts: getWithFilterContacts(),
  };
};

const mapDispatchToProps = {
  onRemoveContact: contactsActions.delContact,
};

ContactList.propTypes = {
  isShowContacts: PropTypes.bool.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// const getFilterContacts = ({ items, filter }) => {
//   if (filter) {
//     return items.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()),
//     );
//   }
//   return items;
// };
