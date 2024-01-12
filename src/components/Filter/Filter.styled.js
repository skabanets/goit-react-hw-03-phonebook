import styled from 'styled-components';

export const FilterWrpper = styled.div`
  display: flex;
  align-content: flex-end;
  gap: 20px;
  width: 400px;
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  font-weight: 500;
`;

export const FilterInput = styled.input`
  padding: 5px;
  font-size: 16px;
`;

export const ResetBtn = styled.button`
  align-self: flex-end;
  border-radius: 5px;
  border: 1px solid black;
  background-color: silver;
  padding: 6px;
  font-size: 14px;
  font-weight: 500;
  color: white;
  background-color: #806491;
`;
