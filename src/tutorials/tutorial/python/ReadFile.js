import React from 'react';

const FileReaderPage = () => {
  const pythonCode = `
def read_file(file_path):
    try:
        with open(file_path, 'r') as file:
            return file.read()
    except FileNotFoundError:
        return "File not found"
    except Exception as e:
        return f"An error occurred: {e}"

# Пример вызова:
content = read_file('example.txt')
print(content)
  `;
  const explanation = `
1. Функция открывает файл для чтения.
2. Если файл не существует, выбрасывается исключение FileNotFoundError.
3. В случае других ошибок возвращается сообщение с описанием ошибки.
4. Пример пытается прочитать файл 'example.txt'.
  `;

  return (
    <div>
      <h2>Чтение из файла</h2>
      <pre>{pythonCode}</pre>
      <p>{explanation}</p>
    </div>
  );
};

export default FileReaderPage;
