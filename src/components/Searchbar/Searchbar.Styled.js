import styled from 'styled-components';

export const SearchBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
`;

export const Input = styled.input`
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  &:hover {
    border: 3px solid green;
  }
`;
