const connection = require('./connection');

const createNewCep = async (cep, log, bairro, local, uf) => {
  const res = connection.execute(
    'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
    [cep, log, bairro, local, uf]
  );

  return res;
};

const findCep = async (cep) => {
  const [returnedCep] = await connection.execute(
    'SELECT * FROM ceps WHERE cep = ?',
    [cep]
  );

  if (!returnedCep.length) return false;

  return returnedCep;
};

module.exports = {
  findCep,
};
