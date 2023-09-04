import { ContactCard } from 'components/ContactCard/ContactCard';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <div key={contact.id}>
          <ContactCard contact={contact} onDelete={onDelete} />
        </div>
      ))}
    </ul>
  );
};
