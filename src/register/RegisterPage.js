import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Заполните все поля');
      return;
    }

    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      navigate('/login'); // Перенаправляем на страницу входа
    } else {
      setError(data.error);
    }
  };

  return (
    <div className="auth-page">
      <h2>Регистрация</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        Уже есть аккаунт? <a href="/login">Войти</a>
      </p>
    </div>
  );
}

export default RegisterPage;