import {User} from "../database/models/user.model";
import { IUser, UserForm } from "../interfaces";


export const findUserPerEmail = (email:string):Promise<IUser| null> => {
  return   User.findOne({ "local.email": email }).exec();
};

export const findUserPerId = (id:string):Promise<IUser| null>  => {
  return User.findById(id).populate("role").populate("image").exec();
};


export const createUser= async (user :UserForm):Promise<IUser| null> => {
      const hashedPassword =  await User.hashPassword(user.password);
      const newUser  = new User({
        username: user.username,
        firstname:user.firstname,
        lastname:user.lastname,
        local: {
          email: user.email,
          password: hashedPassword,
        },
      });
      return await newUser.save();
  };