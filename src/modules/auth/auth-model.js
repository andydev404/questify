import mongoose, { Schema } from 'mongoose';

const AuthSchema = new Schema({
  id: String,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  firstname: String,
});

export default mongoose.model('user', AuthSchema);
