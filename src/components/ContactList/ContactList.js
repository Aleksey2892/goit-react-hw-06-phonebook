import React from 'react';
import PropTypes from 'prop-types';

import s from '../../styled';

const ContactList = ({ isShowContacts, contacts, onRemoveContact }) => {
  return (
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
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,

  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
