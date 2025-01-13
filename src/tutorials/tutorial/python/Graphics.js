import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MatplotlibPage = () => {
  const code = `import matplotlib.pyplot as plt

# Данные для графика
x = [1, 2, 3, 4, 5]
y = [10, 20, 25, 30, 40]

# Создание графика
plt.plot(x, y, marker='o', linestyle='-', color='b', label='Данные 1')

# Добавление заголовка и подписей
plt.title('Пример графика')
plt.xlabel('Ось X')
plt.ylabel('Ось Y')
plt.legend()

# Отображение графика
plt.show()`;

  return (
    <div className="container fade-in">
      <h1>Визуализация данных с Matplotlib</h1>
      <div className="card">
        <SyntaxHighlighter language="python" style={darcula}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default MatplotlibPage;