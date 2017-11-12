import mongoose from 'mongoose';
import Variables from './variables';

mongoose.Promise = global.Promise;

try {
  mongoose.connect(Variables.DB_URL, { useMongoClient: true });
} catch (err) {
  mongoose.createConnection(Variables.DB_URL, { useMongoClient: true });
}

mongoose.connection
  .once('open', () => console.log('MongoDB running'))
  .once('error', err => {
    throw err;
  });
