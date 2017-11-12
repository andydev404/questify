import express from 'express';
import middlewares from './config/middlewares';
import variables from './config/variables';
import './config/db';

const app = express();

// Middlewares
middlewares(app, express);

require('./config/passport/passport-facebook');

app.listen(variables.PORT, err => {
  if (err) throw err;
  console.log(`
  Server running on port: ${variables.PORT}
  -----
  Enviroment: ${process.env.NODE_ENV}
  `);
});
