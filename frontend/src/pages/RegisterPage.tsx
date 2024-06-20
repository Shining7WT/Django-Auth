// src/pages/RegisterPage.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { registerUser } from "../features/auth/authSlice";
import RegisterForm from "../components/RegisterForm";

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleRegister = (
    name: string,
    email: string,
    password: string
  ) => {
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onSubmit={handleRegister} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default RegisterPage;
