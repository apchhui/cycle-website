import Dexie from 'dexie';

// Создаем базу данных
const db = new Dexie('TaskManagerDB');
db.version(1).stores({
  users: '++id, username, password', // Схема таблицы пользователей
});

// Добавление пользователя
async function addUser(username, password) {
  try {
    await db.users.add({ username, password });
    console.log('Пользователь добавлен:', username);
    return true;
  } catch (error) {
    console.error('Ошибка при добавлении пользователя:', error);
    return false;
  }
}

// Поиск пользователя по username
async function findUser(username) {
  return db.users.where('username').equals(username).first();
}

export { addUser, findUser };