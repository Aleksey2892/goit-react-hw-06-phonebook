import React from 'react';
import PropTypes from 'prop-types';

import s from '../../styled';

const ContactList = ({ isShowContacts, contacts, onRemoveContact }) => (
  <>
    {isShowContacts ? (
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
    ) : (
      <p>No contacts in data :(</p>
    )}
  </>
);

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

export default ContactList;
