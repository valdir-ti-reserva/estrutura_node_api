import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Teste de rota inicial' }));

export default routes;
