import React from 'react';
import { BiSearch } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { InputFil, FilterDiv } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
    <FilterDiv>
        <BiSearch style={{width:"20px", height:"20px", fill:"darkgray"}}/>
          <InputFil
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search or start new chat"
            value={value}
            onChange={onChange}
          />
    </FilterDiv>
      
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};