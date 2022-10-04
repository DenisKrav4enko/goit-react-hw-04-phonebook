import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 250px;
  height: 152px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ContactsList = styled.ul`
padding: 15px 0 0 15px;
`;

export const ContactsListItem = styled.li`
  position: relative;
  font-size: 14px;
  horisontal-align: right;
`;

export const DeleteContact = styled.button`
  font-size: 10px;
  margin-left: 5px;
  border-radius: 5px;
  border: none;
  background-color: azure;
`;