import Modal from 'react-modal';
import css from './ContactModal.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

Modal.setAppElement('#root');

export default function ContactModal({ id, isOpen, onClose }) {
  const dispatch = useDispatch();

  return (
    <Modal
      className={css.overlay}
      isOpen={isOpen}
      onClick={onClose}
      onRequestClose={onClose}
    >
      <div className={css.content} onClick={event => event.stopPropagation()}>
        <p>Delete contact?</p>
        <button
          className={css.button}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}

// import css from './Modal.module.css';
// import clsx from 'clsx';

// const makeModalClass = ({ active }) => {
//   return clsx(css.modal, active && css.active);
// };

// export default function Modal({ active, setActive }) {
//   return (
//     <div className={makeModalClass} onClick={() => setActive(false)}>
//       <div className={css.content} onClick={e => e.stopPropagation()}></div>
//     </div>
//   );
// }
