import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './JsPage.css';

const JsFetchPage = () => {
  const code = `// Пример использования Fetch API для получения данных
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log('Полученные данные:', data);
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });`;

  return (
    <div className="container fade-in">
      <h1>Асинхронные запросы с Fetch API</h1>
      <div className="card">
        <SyntaxHighlighter language="javascript" style={darcula}>
          {code}
        </SyntaxHighlighter>
      </div>
      <div className="explanation">
        <h2>Объяснение:</h2>
        <p>
          Fetch API — это современный способ выполнения HTTP-запросов в JavaScript. В этом примере:
        </p>
        <ul>
          <li>
            Мы используем <code>fetch</code> для получения данных с API (<code>https://jsonplaceholder.typicode.com/posts</code>).
          </li>
          <li>
            Ответ преобразуется в JSON с помощью <code>response.json()</code>.
          </li>
          <li>
            Данные выводятся в консоль.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JsFetchPage;