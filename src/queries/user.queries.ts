import {User} from "../database/models/user.model";
import { IUser } from "../interfaces";


export const findUserPerEmail = (email:string):Promise<IUser| null> => {
  return   User.findOne({ "local.email": email }).exec();
};

export const findUserPerId = (id:string):Promise<IUser| null>  => {
  return User.findById(id).populate("role").populate("image").exec();
};
