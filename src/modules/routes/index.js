import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  if (req.user) {
    const name = req.user.displayName;
    const photoUser = `http://graph.facebook.com/${req.user.id}/picture`;
    res.render('home', { titlePage: 'Home', nameUser: name, photoUser });
  } else {
    res.render('home', { titlePage: 'Home' });
  }
});

routes.get('/about', (req, res) => {
  if (req.user) {
    const name = req.user.displayName;
    const photoUser = `http://graph.facebook.com/${req.user.id}/picture`;
    res.render('about', { titlePage: 'About', nameUser: name, photoUser });
  } else {
    res.render('about', { titlePage: 'About' });
  }
});

export default routes;
