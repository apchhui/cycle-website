import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Incl.css';

const CppRandomGeneratorPage = () => {
  const code = `#include <iostream>
#include <random> // Для генерации случайных чисел
#include <ctime>  // Для инициализации генератора

int main() {
    // Инициализация генератора случайных чисел
    std::mt19937 gen(time(0)); // Mersenne Twister
    std::uniform_int_distribution<> dist(1, 100); // Диапазон от 1 до 100

    // Генерация и вывод 5 случайных чисел
    std::cout << "Случайные числа: ";
    for (int i = 0; i < 5; ++i) {
        std::cout << dist(gen) << " ";
    }
    std::cout << std::endl;

    return 0;
}`;

  return (
    <div className="container fade-in">
      <h1>Генератор случайных чисел на C++</h1>
      <div className="card">
        <SyntaxHighlighter language="cpp" style={darcula}>
          {code}
        </SyntaxHighlighter>
      </div>
      <div className="explanation">
        <h2>Объяснение:</h2>
        <p>
          Этот код использует библиотеку `random` для генерации случайных чисел. Вот как это работает:
        </p>
        <ul>
          <li>
            <strong>std::mt19937</strong> — это генератор случайных чисел на основе алгоритма Mersenne Twister.
          </li>
          <li>
            <strong>std::uniform_int_distribution</strong> — это распределение, которое генерирует целые числа в заданном диапазоне (в данном случае от 1 до 100).
          </li>
          <li>
            <strong>time(0)</strong> используется для инициализации генератора текущим временем, чтобы каждый раз получать разные числа.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CppRandomGeneratorPage;