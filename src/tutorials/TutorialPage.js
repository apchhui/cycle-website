import React from 'react';
import './TutorialPage.css';
import { useNavigate } from 'react-router-dom';

function TutorialPage() {
    const navigate = useNavigate();
  const handleButtonClick = (language) => {
    navigate(`/tutorials/${language.toLowerCase()}`);
    console.log(`Перейти в раздел ${language}`);
  };

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <h1 className="tutorial-title">Примеры кода</h1>
        <div className="tutorial-button-container">
          {['Python', 'C++', 'JavaScript'].map((language, index) => (
            <button
              className="tutorial-button"
              key={index}
              onClick={() => handleButtonClick(language)}
            >
              {language}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TutorialPage;
