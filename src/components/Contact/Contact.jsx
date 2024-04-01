import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Contact.module.css';

export default function Contact({
  data: { id, name, number },
  openContactModal,
}) {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div className={css.container}>
        <div className={css.name}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.phone}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>

      <div className={css.buttonsGroupe}>
        <button className={css.button} onClick={openContactModal}>
          delete
        </button>
        <button
          className={css.button}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
