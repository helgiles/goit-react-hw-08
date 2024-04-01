import Modal from 'react-modal';
import css from './ContactModal.module.css';

Modal.setAppElement('#root');

export default function ContactModal({ button, isOpen, onClose }) {
  return (
    <Modal
      className={css.overlay}
      isOpen={isOpen}
      onClick={event => event.stopPropagation()}
      onRequestClose={onClose}
    >
      <div className={css.content}>{button && <div>Delete contact?</div>}</div>
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
