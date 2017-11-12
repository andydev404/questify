import { Router } from 'express';
import passport from 'passport';
import Variables from '../../config/variables';

const routes = new Router();

routes.get('/profile', Variables.checkAuthentication, (req, res) => {
  if (req.user) {
    const name = req.user.displayName;
    const photoUser = `http://graph.facebook.com/${req.user.id}/picture`;
    res.render('users/profile', { titlePage: 'Profile', nameUser: name, photoUser });
  } else {
    res.render('users/profile', { titlePage: 'Profile' });
  }
});

routes.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

routes.get('/auth/facebook', passport.authenticate('facebook'));

routes.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/error',
}));

export default routes;
