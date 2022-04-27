import styled from 'styled-components';

export const DivSearchbar = styled.div`
    margin-top: auto;    
    margin-left: 50px;
    
`;

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  width: 300%;
  max-width: 600px;
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 7px;
   padding-bottom: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;