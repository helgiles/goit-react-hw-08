import LoginForm from '../../LoginForm/LoginForm';
import PageTitle from '../../PageTitle/PageTitle';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <PageTitle>
        Please log in or <Link to="/register">register</Link>
      </PageTitle>
      <LoginForm />
    </div>
  );
}
