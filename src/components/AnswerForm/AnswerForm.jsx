import React, { useState } from 'react';
import {IconButton} from '../IconButton/IconButton';
import { ImArrowRight2 } from 'react-icons/im';
import PropTypes from 'prop-types';

import { DivSearchbar, FormStyled, Input } from './AnswerForm.styled';

export function Searchbar({ propSubmit }) {
  const [inputFormValue, setInputFormValue] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;

    setInputFormValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    propSubmit(inputFormValue);

    setInputFormValue('');
  };

  return (
    <>
      <DivSearchbar>
        <hr style={{color: 'cadetblue', width: '280%', margin: '0'}}/>
        <FormStyled onSubmit={handleSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Type your message"
            value={inputFormValue}
            onChange={handleChange}
          />
          <IconButton aria-label="search">
            <ImArrowRight2 width="40" height="40" />
          </IconButton>
        </FormStyled>
        <hr style={{color: 'cadetblue', width: '280%', margin: '0'}}/>
      </DivSearchbar>
    </>
  );
}


Searchbar.propTypes = {
  propSubmit: PropTypes.func.isRequired,
};