import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';

import s from '../../styled';

const ContactList = ({ contacts }) => {
  const isShowContacts = contacts.length > 0;

  return (
    <>
      {isShowContacts && (
        <s.Ul>
          {contacts.map(({ id }) => (
            <ContactListItem key={id} id={id} />
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
    }

    return items;
  };

  return {
    contacts: getWithFilterContacts(),
  };
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps)(ContactList);
