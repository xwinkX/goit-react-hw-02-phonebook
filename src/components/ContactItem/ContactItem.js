import css from 'components/ContactItem/ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDeleteContacts }) => {
  return (
    <li key={id} className={css.li}>
      <p className={css.p}>{name}</p>
      <p>{number}</p>
      <button className={css.button} onClick={() => onDeleteContacts(id)}>
        Удалить
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
  onDeleteContacts: PropTypes.func.isRequired,
};
