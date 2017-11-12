import path from 'path';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import exphbs from 'express-handlebars';
import AppRoutes from '../modules/routes';
import userRoutes from '../modules/auth/auth-routes';

export default (app, express) => {
  app.use(express.static(path.join(__dirname, '../assets')));
  // Cookie Parser Config
  app.use(cookieParser());
  // Express session Config
  app.use(session({ secret: 'secret key', resave: true, saveUninitialized: true }));
  // Passport Config
  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));
  // Routes Config
  app.use(AppRoutes);
  app.use(userRoutes);
  // Body Parser Config
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // Handlebars Config
  app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, '../views/partials'),
    layoutsDir: path.join(__dirname, '../views/layouts'),
  }));
  app.set('view engine', '.hbs');
  app.set('views', path.join(__dirname, '../views'));
  // Morgan Config
  if (process.env.NODE_ENV === 'development') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
  }
};
