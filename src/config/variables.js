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

export default {
  ...defaultConfig,
  ...getEnv(process.env.NODE_ENV),
};
