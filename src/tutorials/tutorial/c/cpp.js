import React from 'react';
import { Link } from 'react-router-dom';
import './cpp.css';

const CppTutorialsPage = () => {
  return (
    <div className="container">
      <h1>Туториалы по C++</h1>
      <div className="button-container">
        <Link to="/tutorials/c/0" className="tutorial-button">
          Генератор случайных чисел
        </Link>
        <Link to="/tutorials/c/1" className="tutorial-button">
          Работа с векторами
        </Link>
        <Link to="/tutorials/c/2" className="tutorial-button">
          Игра "Угадай число"
        </Link>
      </div>
    </div>
  );
};

export default CppTutorialsPage;