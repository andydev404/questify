const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

const MongoConfig = {
  development: {
    DB_URL: 'mongodb://localhost/questify-dev',
  },
  production: {
    DB_URL: 'mongodb://localhost/questify',
  },
};

function getEnv(env) {
  return MongoConfig[env];
}

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
}

export default {
  ...defaultConfig,
  ...getEnv(process.env.NODE_ENV),
  checkAuthentication,
};
