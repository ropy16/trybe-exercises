const express = require('express');

const User = require('./model/User');

const app = express();

app.use(express.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const response = await User.createUser(firstName, lastName, email, password);

  if (!response) {
    return res.status(400).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres",
    });
  }

  res
    .status(200)
    .json({ id: response[0].insertId, firstName, lastName, email });
});

app.get('/user', async (_req, res) => {
  const response = await User.getAllUsers();

  res.status(200).json(response);
});

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001');
});
