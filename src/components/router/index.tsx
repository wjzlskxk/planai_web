import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../auth/login';
import SignupEmail from 'src/components/auth/signup/email';
import SignupPassword from 'src/components/auth/signup/password';
const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup/email" element={<SignupEmail />} />
        <Route path="/signup/password" element={<SignupPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
