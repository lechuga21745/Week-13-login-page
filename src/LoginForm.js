// src/components/LoginForm.js
import React from 'react';
import './loginform.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3>Log In</h3>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
    </div>
  );
}

export default LoginForm;