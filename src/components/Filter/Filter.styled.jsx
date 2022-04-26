import styled from 'styled-components';

export const InputFil = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const FilterDiv = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    overflow: hidden;
`