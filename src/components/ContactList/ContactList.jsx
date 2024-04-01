import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/slice';
import css from './ContactList.module.css';

export default function ContactList({ openContactModal }) {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} openContactModal={openContactModal} />
        </li>
      ))}
    </ul>
  );
}
