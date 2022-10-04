import React from 'react';
import PropTypes from 'prop-types';
import {
  Title,
  Wrapper,
} from './StyledComponents';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

const ContactsBook = props => {
  const {
    filter,
    contacts,
    setFilter,
    setContacts,
  } = props;

  return (
    <Wrapper>
      <Title>
        Phonebook
      </Title>
      <ContactForm
        contacts={contacts}
        setContacts={setContacts}
      />

      <Title>
        Contacts
      </Title>
      <Filter
        filter={filter}
        setFilter={setFilter}
      />
      <ContactList
        filter={filter}
        contacts={contacts}
        setContacts={setContacts}
      />
    </Wrapper>
  )
}

ContactsBook.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
  setFilter: PropTypes.func,
  setContacts: PropTypes.func,
};

export default ContactsBook;