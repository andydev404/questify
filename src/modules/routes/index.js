import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.render('home', { titlePage: 'Home' });
});

export default routes;
