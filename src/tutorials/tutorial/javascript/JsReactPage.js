import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './JsPage.css';

const JsReactPage = () => {
  const code = `// Пример простого React-компонента
import React from 'react';

function Greeting({ name }) {
  return <h1>Привет, {name}!</h1>;
}

export default Greeting;`;

  return (
    <div className="container fade-in">
      <h1>Создание компонента в React</h1>
      <div className="card">
        <SyntaxHighlighter language="javascript" style={darcula}>
          {code}
        </SyntaxHighlighter>
      </div>
      <div className="explanation">
        <h2>Объяснение:</h2>
        <p>
          React — это популярная библиотека для создания пользовательских интерфейсов. В этом примере:
        </p>
        <ul>
          <li>
            Мы создаём функциональный компонент <code>Greeting</code>, который принимает пропс <code>name</code>.
          </li>
          <li>
            Компонент возвращает JSX, который отображает приветствие.
          </li>
          <li>
            Компонент экспортируется для использования в других частях приложения.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JsReactPage;