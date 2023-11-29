// src/pages/Logar.tsx
import React from 'react';
import LoginForm from '../Components/LoginForm';
import "./Logar.scss"

const Logar: React.FC = () => {
  const handleLogin = () => {
    console.log('Usuário logado');
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Logar;
