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

const Filter = ({ onFilter, onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <Input
        type="text"
        placeholder="Filter"
        name="filter"
        value={onFilter}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
