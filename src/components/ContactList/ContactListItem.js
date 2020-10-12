import React from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contactsOperations';
import PropTypes from 'prop-types';
import s from '../../styled';

const ContactListItem = ({ name, number, onRemoveContact }) => (
  <s.liItem>
    {name}: {number}
    <s.BtnRemove type="button" onClick={onRemoveContact}>
      Delete
    </s.BtnRemove>
  </s.liItem>
);

const mapStateToProps = (state, ownProps) => {
  const itemData = state.contacts.items.find(item => ownProps.id === item.id);

  return { ...itemData };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () => dispatch(contactsOperations.delContact(ownProps.id)),
});

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
