import styled from 'styled-components';

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  background-color: #f2f2ef;
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 10px;
`;

export const DeleteContactBtn = styled.button`
  padding: 1px 2px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  background-color: #f34c3f;
  color: white;
`;

export const FilterErrorMessage = styled.p`
  color: red;
`;
