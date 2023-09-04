import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Input = styled(Field)`
  border: 2px solid gray;
  &:hover {
    border: 2px solid green;
  }
`;

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
  width: 200px;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  text-align: left;
`;

export const ButtonSubmit = styled.button`
  width: 150px;
  margin-left: auto;
  margin-right: auto;
`;
