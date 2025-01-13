import React from 'react';
import './TestPage.css';

function TestPage() {
  return (
    <div className="no-products-page">
      <div className="message-container">
        <h1 className="message-title">Продуктов пока нет</h1>
        <p className="message-description">
          Ты долбоёб
        </p>
      </div>
    </div>
  );
}

export default TestPage;
