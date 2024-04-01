import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import ContactModal from '../../components/ContactModal/ContactModal';
import css from './Contact.module.css';

export default function Contact({ data: { id, name, number } }) {
  const [showContactModal, setShowContactModal] = useState(false);

  const openContactModal = () => {
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

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
        <button
          className={css.button}
          onClick={() => {
            openContactModal();
          }}
        >
          Delete
        </button>
      </div>

      <ContactModal
        id={id}
        isOpen={showContactModal}
        onClose={closeContactModal}
      />
    </div>
  );
}
