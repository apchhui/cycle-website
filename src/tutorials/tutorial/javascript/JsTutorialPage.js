import React from 'react';
import { Link } from 'react-router-dom';
import './JsTutorialsPage.css';

const JsTutorialsPage = () => {
  return (
    <div className="container">
      <h1>Туториалы по JavaScript</h1>
      <div className="button-container">
        <Link to="/tutorials/js/0" className="tutorial-button">
          Fetch API
        </Link>
        <Link to="/tutorials/js/1" className="tutorial-button">
          React
        </Link>
        <Link to="/tutorials/js/2" className="tutorial-button">
          Манипуляция DOM
        </Link>
      </div>
    </div>
  );
};

export default JsTutorialsPage;