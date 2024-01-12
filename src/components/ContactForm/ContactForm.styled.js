import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 15px;
  border: 1px solid black;
  border-radius: 5px;
  width: 400px;
  background-color: #d3e29d;
  /* box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.16); */
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
  font-weight: 400;
  width: 100%;
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 16px;
`;

export const FormButton = styled.button`
  padding: 8px 16px;
  color: white;
  background-color: #8ab446;
  border-radius: 5px;
  border: 1px solid green;
  font-weight: 500;

  &:hover {
    background-color: #778d45;
  }
`;
