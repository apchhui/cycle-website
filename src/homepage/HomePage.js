import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  document.body.style.overflow = '';
  return (
    <div className="home-page">
      <div className="nav-bar">
        <div className="nav-item">
          <i className="fas fa-box"></i>
          <div className="move">
            <Link to="/products">Продукты</Link>
          </div>
        </div>
        <div className="nav-item">
          <i className="fas fa-info-circle"></i>
          <Link to="/about">О нас</Link>
        </div>
        <div className="nav-item">
          <i className="fas fa-book"></i>
          <Link to="/tutorials">Туториалы</Link>
        </div>
        <div className="nav-item register-button-container">
          <Link to="/register" className="register-button">Регистрация</Link>
        </div>
      </div>

      <header className="hero">
        <span className="title">Cycle Corporation</span>
        <p className="subtitle">Современные решения для автоматизации и контроля</p>
        <Link to="/main" className="cta">Узнать больше</Link>
      </header>

      <footer className="footer">
        <p>&copy; 2025 Cycle Corporation. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default HomePage;