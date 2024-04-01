import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageTitle from '../../PageTitle/PageTitle';
import ContactForm from '../../ContactForm/ContactForm';
import SearchBox from '../../SearchBox/SearchBox';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import Loader from '../../Loader/Loader';
import ContactList from '../../ContactList/ContactList';
import { fetchContacts } from '../../../redux/contacts/operations';
import { selectLoading } from '../../../redux/contacts/selectors';
import { selectError } from '../../../redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
      <SearchBox />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <ContactList />
    </div>
  );
}
