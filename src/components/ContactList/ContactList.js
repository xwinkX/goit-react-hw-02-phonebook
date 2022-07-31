import css from 'components/ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className={css.ul}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.li}>
        <p className={css.p}>{name}</p>
        <p>{number}</p>
        <button className={css.button} onClick={() => onDeleteContacts(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
