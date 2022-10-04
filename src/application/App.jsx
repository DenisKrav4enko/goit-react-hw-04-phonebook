import React, { useEffect, useState } from 'react';
import { Wrapper } from './StyeledComponents';
import ContactsBook from './contactsBook/ContactsBook';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const isStored = localStorage.getItem('contacts')
    if (isStored) {
      setContacts(JSON.parse(isStored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  return (
    <Wrapper>
      <ContactsBook
        filter={filter}
        contacts={contacts}
        setFilter={setFilter}
        setContacts={setContacts}
      />
    </Wrapper>
  );
};

export default App;
