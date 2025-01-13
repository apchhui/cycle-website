import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CalculatorPage = () => {
  const code = `# Простой калькулятор на Python
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Ошибка: деление на ноль"
    return x / y`;

  return (
    <div className="container">
      <h1>Калькулятор на Python</h1>
      <SyntaxHighlighter language="python" style={darcula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CalculatorPage;