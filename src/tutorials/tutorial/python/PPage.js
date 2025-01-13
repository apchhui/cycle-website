import React from 'react';
import { Link } from 'react-router-dom';
import './PPage.css';

const PythonTutorials = () => {
  return (
    <div className="container">
      <h1>Python Туториалы</h1>
      <ul className="tutorial-list">
        <li>
          <Link to="/tutorials/python/0" className="tutorial-link">Калькулятор на Python</Link>
        </li>
        <li>
          <Link to="/tutorials/python/1" className="tutorial-link">SQLite на Python</Link>
        </li>
        <li>
          <Link to="/tutorials/python/2" className="tutorial-link">Создание графиков на Python</Link>
        </li>
      </ul>
    </div>
  );
};

export default PythonTutorials;