import { useEffect, useState } from 'react';
import { Section, Title } from './App.Styled';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { SearchBar } from './Searchbar/Searchbar';
import { ContactList } from './ContactList/ContactList';

const baseContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const localStorageKey = 'Home-Contacts';

const contactsFromLocalStorage = () => {
  const savedContacts = localStorage.getItem(localStorageKey);
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return baseContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(contactsFromLocalStorage);
  const [filter, setFilter] = useState('');

  const changeNameFilter = newName => {
    setFilter(newName);
  };

  const addContact = newContact => {
    const isExistName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExistName) {
      alert(`Contact "${newContact.name}" is already exist`);
      return;
    }
    setContacts(contacts => [...contacts, newContact]);
  };

  const deleteContact = сontactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== сontactId)
    );
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Section>
      <Title>Phonebook</Title>

      <ContactForm onAdd={addContact} contacts={contacts} />

      <Title>Contacts</Title>

      <SearchBar filterName={filter} onChangeName={changeNameFilter} />

      <ContactList contacts={visibleContacts} onDelete={deleteContact} />

      <GlobalStyle />
    </Section>
  );
};
