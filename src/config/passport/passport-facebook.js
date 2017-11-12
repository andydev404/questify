import passport from 'passport';
import facebookStrategy from 'passport-facebook';

const strategyConfig = new facebookStrategy(
  {
    clientID: '152549265360989',
    clientSecret: '0b4e5183b366802dfa05dc73d5302c28',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
  },
  (accessToken, refreshToken, profile, done) => {
    done(null, profile);
  });

export default passport.use(strategyConfig);
