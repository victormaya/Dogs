import React from 'react';
import { Routes, Route } from 'react-router';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

// import { Container } from './styles';

function Login() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/criar' element={<LoginCreate />} />
        <Route path='/perdeu' element={<LoginPasswordLost />} />
        <Route path='/resetar' element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
