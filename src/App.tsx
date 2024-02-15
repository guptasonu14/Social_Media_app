import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import { Home } from './_root/pages';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<RootLayout />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
