import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 250px;
  height: 152px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const AddContactsContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
`;

export const AddContactsSubtitle = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: #1d1e1f;
  margin-bottom: 10px;
`;

export const AddContactsForm = styled.form`
`;

export const AddContactsInput = styled.input`
  height: 15px;
  margin: 5px 0; 
`;

export const AddContactsButton = styled.button`
  border-radius: 5px;
  border: none;
  background-color: azure;
`;