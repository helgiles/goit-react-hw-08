import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageTitle from '../../PageTitle/PageTitle';
import ContactForm from '../../ContactForm/ContactForm';
import SearchBox from '../../SearchBox/SearchBox';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import Loader from '../../Loader/Loader';
import ContactList from '../../ContactList/ContactList';
import ContactModal from '../../ContactModal/ContactModal';
import { fetchContacts } from '../../../redux/contacts/operations';
import { selectLoading } from '../../../redux/contacts/selectors';
import { selectError } from '../../../redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [clickedButton, setClickedButton] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const openContactModal = button => {
    setClickedButton(button);
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  return (
    <div>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
      <SearchBox />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <ContactList openContactModal={openContactModal} />
      {clickedButton && (
        <ContactModal
          isOpen={showContactModal}
          onClose={closeContactModal}
          button={clickedButton}
        />
      )}
    </div>
  );
}
