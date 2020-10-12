import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const Input = styled.input`
  margin-bottom: 20px;
  text-align: center;

  &::placeholder {
    font-size: 14px;
  }
`;

const Filter = ({ contacts, filterValue, onFilter }) => {
  const isShowFilter = contacts.length > 2;

  return (
    <>
      {isShowFilter && (
        <div>
          <p>Find contacts by name</p>
          <Input
            type="text"
            placeholder="Filter"
            name="filter"
            value={filterValue}
            onChange={onFilter}
          />
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filterValue: state.contacts.filter,
});

const mapDispatchToProps = {
  onFilter: contactsActions.filterContacts,
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
