import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Incl.css';

const CppVectorPage = () => {
  const code = `#include <iostream>
#include <vector>
#include <algorithm> // Для сортировки

int main() {
    std::vector<int> numbers = {5, 2, 9, 1, 5, 6};

    // Добавление элемента
    numbers.push_back(10);

    // Удаление последнего элемента
    numbers.pop_back();

    // Сортировка вектора
    std::sort(numbers.begin(), numbers.end());

    // Вывод элементов
    std::cout << "Элементы вектора: ";
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}`;

  return (
    <div className="container fade-in">
      <h1>Работа с векторами на C++</h1>
      <div className="card">
        <SyntaxHighlighter language="cpp" style={darcula}>
          {code}
        </SyntaxHighlighter>
      </div>
      <div className="explanation">
        <h2>Объяснение:</h2>
        <p>
          Вектор — это динамический массив, который может изменять свой размер. В этом примере мы:
        </p>
        <ul>
          <li>
            <strong>Добавляем элемент</strong> с помощью <code>push_back()</code>.
          </li>
          <li>
            <strong>Удаляем элемент</strong> с помощью <code>pop_back()</code>.
          </li>
          <li>
            <strong>Сортируем вектор</strong> с помощью <code>std::sort()</code>.
          </li>
        </ul>
        <p>
          Векторы очень удобны для хранения и обработки данных, так как они автоматически управляют памятью.
        </p>
      </div>
    </div>
  );
};

export default CppVectorPage;