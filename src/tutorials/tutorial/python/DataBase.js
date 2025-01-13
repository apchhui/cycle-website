import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DatabasePage = () => {
  const code = `import sqlite3

# Подключение к базе данных (или создание, если её нет)
conn = sqlite3.connect('example.db')
cursor = conn.cursor()

# Создание таблицы
cursor.execute('''CREATE TABLE IF NOT EXISTS users
                  (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)''')

# Вставка данных
cursor.execute("INSERT INTO users (name, age) VALUES ('Alice', 30)")
cursor.execute("INSERT INTO users (name, age) VALUES ('Bob', 25)")

# Сохранение изменений
conn.commit()

# Выборка данных
cursor.execute("SELECT * FROM users")
rows = cursor.fetchall()

for row in rows:
    print(row)

# Закрытие соединения
conn.close()`;

  return (
    <div className="container fade-in">
      <h1>Работа с SQLite в Python</h1>
      <div className="card">
        <SyntaxHighlighter language="python" style={darcula}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default DatabasePage;