import { useState, useEffect } from 'react';

import Form from './Form';
import Filter from './Filter';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const formSubmitHandler = contact => {
    const normalzeName = contact.name.toLocaleLowerCase();

    contacts.find(contact => contact.name.toLocaleLowerCase() === normalzeName)
      ? alert(`${contact.name} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getContactsFilter = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const contactsFilter = getContactsFilter();
  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={contactsFilter} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
