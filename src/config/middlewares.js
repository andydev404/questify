import path from 'path';
import bodyParser from 'body-parser';
import exphbs from 'express-handlebars';
import Routes from '../modules/routes';

export default (app, express) => {
  app.use(express.static(path.join(__dirname, '../assets')));
  app.use(Routes);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, '../views/partials'),
    layoutsDir: path.join(__dirname, '../views/layouts'),
  }));
  app.set('view engine', '.hbs');
  app.set('views', path.join(__dirname, '../views'));
  if (process.env.NODE_ENV === 'development') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
  }
};
