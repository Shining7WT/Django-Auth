// src/pages/LoginPage.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { loginUser } from '../features/auth/authSlice';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = (email: string, password: string) => {
    dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
