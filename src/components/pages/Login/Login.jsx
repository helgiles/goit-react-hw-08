import LoginForm from '../../LoginForm/LoginForm';
import PageTitle from '../../PageTitle/PageTitle';
import { Link } from 'react-router-dom';
import css from './Login.module.css';

export default function Login() {
  return (
    <div className={css.login}>
      <PageTitle>
        Please log in or <Link to="/register">register</Link>
      </PageTitle>
      <LoginForm />
    </div>
  );
}
