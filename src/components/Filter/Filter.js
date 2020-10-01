import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Input = styled.input`
  margin-bottom: 20px;
  text-align: center;

  &::placeholder {
    font-size: 14px;
  }
`;

const Filter = ({ filterValue, onFilter }) => (
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
);

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
