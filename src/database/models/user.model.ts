import  mongoose from 'mongoose';
import  bcrypt from "bcrypt";
import { UserModel,IUser } from '../../interfaces';


const userSchema = new mongoose.Schema<IUser,UserModel>({
    username: { type: String, required: true, unique: true },
    firstname: { type: String, required: true},
    lastname: { type: String, required: true },
    created_at: {type: Date,require: true,default: Date.now()},

    local: {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  
});

userSchema.statics.hashPassword = async (password:string) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  } catch (e) {
    throw e;
  }
};

userSchema.methods.comparePassword = function (password:string) {
  return bcrypt.compareSync(password, this.local.password);
};

export const User = mongoose.model<IUser, UserModel>('User', userSchema);

