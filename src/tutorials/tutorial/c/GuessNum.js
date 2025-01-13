import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Incl.css';

const CppGuessNumberPage = () => {
  const code = `#include <iostream>
#include <cstdlib> // Для rand() и srand()
#include <ctime>   // Для time()

int main() {
    srand(time(0)); // Инициализация генератора случайных чисел
    int secretNumber = rand() % 100 + 1; // Случайное число от 1 до 100
    int guess = 0;
    int attempts = 0;

    std::cout << "Я загадал число от 1 до 100. Попробуй угадать!" << std::endl;

    while (guess != secretNumber) {
        std::cout << "Введите ваше предположение: ";
        std::cin >> guess;
        attempts++;

        if (guess < secretNumber) {
            std::cout << "Слишком мало!" << std::endl;
        } else if (guess > secretNumber) {
            std::cout << "Слишком много!" << std::endl;
        }
    }

    std::cout << "Поздравляю! Вы угадали число за " << attempts << " попыток." << std::endl;

    return 0;
}`;

  return (
    <div className="container fade-in">
      <h1>Игра "Угадай число" на C++</h1>
      <div className="card">
        <SyntaxHighlighter language="cpp" style={darcula}>
          {code}
        </SyntaxHighlighter>
      </div>
      <div className="explanation">
        <h2>Объяснение:</h2>
        <p>
          Это простая игра, где компьютер загадывает число, а игрок пытается его угадать. Вот как это работает:
        </p>
        <ul>
          <li>
            <strong>srand(time(0))</strong> инициализирует генератор случайных чисел текущим временем.
          </li>
          <li>
            <strong>rand() % 100 + 1</strong> генерирует случайное число от 1 до 100.
          </li>
          <li>
            Игрок вводит свои предположения, а программа подсказывает, больше или меньше загаданное число.
          </li>
          <li>
            Игра продолжается, пока игрок не угадает число.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CppGuessNumberPage;