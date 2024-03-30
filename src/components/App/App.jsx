import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';

const HomePage = lazy(() => import('../pages/Home/Home.jsx'));
const RegisterPage = lazy(() => import('../pages/Register/Register.jsx'));
const LoginPage = lazy(() => import('../pages/Login/Login.jsx'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts.jsx'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

// import './App.css';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from '../../redux/contactsOps';
// import { selectError, selectLoading } from '../../redux/contactsSlice';
// import Loader from '../Loader/Loader';
// import ErrorMessage from '../ErrorMessage/ErrorMessage';
// import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from '../SearchBox/SearchBox';
// import ContactList from '../ContactList/ContactList';

// function App() {
//   const dispatch = useDispatch();
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1 className="header">Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       {error && <ErrorMessage />}
//       {loading && <Loader />}
//       <ContactList />
//     </div>
//   );
// }

// export default App;
