import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  AddContactsForm,
  AddContactsInput,
  AddContactsButton,
  AddContactsSubtitle,
  AddContactsContainer,
} from './StyledComponents';
import { nanoid } from 'nanoid';

const ContactForm = props => {
  const {
    contacts,
    setContacts
  } =props;
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleOnSubmit = event => {
    if (contacts.every(contact => contact.name !== name)) {
      setContacts([...contacts, { id: nanoid(), name: name, number: number }]);
      event.preventDefault();
    } else {
      alert(`${name} is already in contacts`);
      event.preventDefault();
    }
  }

  return (
    <Wrapper>
      <AddContactsContainer>
        <AddContactsSubtitle>
          Name
        </AddContactsSubtitle>
        <AddContactsForm onSubmit={handleOnSubmit}>
          <AddContactsInput
            type={'text'}
            name={'name'}
            value={name}
            title={"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            onChange={event => setName(event.currentTarget.value)}
            placeholder={'Jacob Mercer'}
          />
          <AddContactsInput
            type={'tel'}
            name={'number'}
            value={number}
            title={'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
            onChange={event => setNumber(event.currentTarget.value)}
            placeholder={'+123456789123'}
          />
          <AddContactsButton type="submit">
            Add contact
          </AddContactsButton>
        </AddContactsForm>
      </AddContactsContainer>
    </Wrapper>
  )
}

ContactForm.propTypes = {
  contacts: PropTypes.array,
  setContacts: PropTypes.func,
};

export default ContactForm;
