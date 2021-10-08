const connection = require('./connection');

const getAllUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM users');
  return users;
};

const createUser = async (firstName, lastName, email, password) => {
  if ([firstName, lastName, email, password].includes(undefined)) return false;
  if (password.length <= 6) return false;

  return connection.execute(
    'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  );
};

module.exports = { createUser, getAllUsers };
