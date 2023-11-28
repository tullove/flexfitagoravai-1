// src/components/LoginForm.tsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./Logar.scss"
import { auth } from "../Services/firebaseConnection"; 
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm: React.FC <LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };


  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
      navigate('/teste')
    } catch (error) {
      console.error('Erro no login:' + error);
    }
  };

  return (
    <div id="Logar" className="main-container">
    <header>
        <p className="flex">FLEX</p>
        <p>FIT</p>
    </header>
    <main>
        <form>
        <input type="email" value={email} onChange={handleEmailChange} placeholder='Nome:' />
        <input type="password" value={password} onChange={handlePasswordChange} placeholder='Senha' />

        </form>
    </main>
    <footer>
        <button type="button" onClick={handleLogin} >ENTRAR</button>
        <p className="text">Não possui login? <a href="../Cadastrar/cadastro.html" className="cadastrese">Cadastre-se</a></p>
    </footer>
</div>
  );
};

export default LoginForm;



