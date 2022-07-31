const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => onDeleteContacts(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
