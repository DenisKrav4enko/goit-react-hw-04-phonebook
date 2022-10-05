import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  ContactsList,
  DeleteContact,
  ContactsListItem,
} from './StyledComponents';
import { getFilteredContacts } from '../../../helpers/getFilteredContacts';

const ContactList = props => {
  const {
    filter,
    contacts,
    setContacts,
  } = props;
  const filteredContacts = getFilteredContacts(contacts, filter);
  const handleOnDelete = event => {
    setContacts(contacts.filter(contact => contact.id !== event))
  }

  return (
    <Wrapper>
      <ContactsList>
        {!filter
          ? contacts.map(contact => (
            <ContactsListItem key={contact.id}>
              {contact.name}: {contact.number}
              <DeleteContact accessKey={contact.id} onClick={event => handleOnDelete(event.currentTarget.accessKey)}>
                Delete
              </DeleteContact>
            </ContactsListItem>
          ))
          : filteredContacts.map(contact => (
              <ContactsListItem key={contact.id}>
                {contact.name}: {contact.number}
                <DeleteContact accessKey={contact.id} onClick={event => handleOnDelete(event.currentTarget.accessKey)}>
                  Delete
                </DeleteContact>
              </ContactsListItem>
            ))
        }
      </ContactsList>
    </Wrapper>
  )
}

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  item: PropTypes.object,
  number: PropTypes.number,
  filter: PropTypes.string,
  contact: PropTypes.object,
  contacts: PropTypes.array,
  setContacts: PropTypes.func,
  filteredContacts: PropTypes.array,
  getFilteredContacts: PropTypes.func,
};

export default ContactList;
