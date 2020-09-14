const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Teste de rota inicial' });
});

module.exports = routes;