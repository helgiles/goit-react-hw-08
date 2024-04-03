import PageTitle from '../../PageTitle/PageTitle';
import RegistrationForm from '../../RegistrationForm/RegistrationForm';
import css from './Register.module.css';

export default function Register() {
  return (
    <div className={css.register}>
      <PageTitle>Register your account</PageTitle>
      <RegistrationForm />
    </div>
  );
}
