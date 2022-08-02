import ContactItem from 'components/ContactItem/ContactItem';
import css from 'components/ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className={css.ul}>
    <ContactItem contacts={contacts} onDeleteContacts={onDeleteContacts} />
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onDeleteContacts: PropTypes.func.isRequired,
};

export default ContactList;
