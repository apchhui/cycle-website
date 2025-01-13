import React from 'react';

const ServerRequestPage = () => {
  const pythonCode = `
import requests

def fetch_data(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            return response.json()
        else:
            return f"Failed to fetch data: {response.status_code}"
    except requests.exceptions.RequestException as e:
        return f"An error occurred: {e}"

# Пример вызова:
data = fetch_data('https://jsonplaceholder.typicode.com/posts')
print(data)
  `;
  const explanation = `
1. Мы используем библиотеку requests для выполнения GET-запроса.
2. Если запрос успешен (код 200), возвращаем данные в формате JSON.
3. Обрабатываются исключения, которые могут возникнуть при выполнении запроса.
4. Пример делает запрос к API и выводит данные.
  `;

  return (
    <div>
      <h2>Запрос на сервер</h2>
      <pre>{pythonCode}</pre>
      <p>{explanation}</p>
    </div>
  );
};

export default ServerRequestPage;
