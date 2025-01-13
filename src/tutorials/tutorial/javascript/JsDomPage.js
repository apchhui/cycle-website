import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './JsPage.css';

const JsDomPage = () => {
  const code = `// Пример манипуляции DOM
const container = document.getElementById('container');

// Добавление элемента
const newElement = document.createElement('div');
newElement.textContent = 'Новый элемент';
container.appendChild(newElement);

// Удаление элемента
const oldElement = document.getElementById('oldElement');
if (oldElement) {
  container.removeChild(oldElement);
}`;

  return (
    <div className="container fade-in">
      <h1>Манипуляция DOM в JavaScript</h1>
      <div className="card">
        <SyntaxHighlighter language="javascript" style={darcula}>
          {code}
        </SyntaxHighlighter>
      </div>
      <div className="explanation">
        <h2>Объяснение:</h2>
        <p>
          DOM (Document Object Model) — это программный интерфейс для работы с HTML-документами. В этом примере:
        </p>
        <ul>
          <li>
            Мы создаём новый элемент <code>div</code> и добавляем его в контейнер.
          </li>
          <li>
            Удаляем элемент с ID <code>oldElement</code>, если он существует.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JsDomPage;