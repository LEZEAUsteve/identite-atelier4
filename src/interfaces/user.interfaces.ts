

import { Document ,Model } from "mongoose";
import { Types } from 'mongoose';


export interface IUserLocal{
    email:string;
    password:string
}


export interface  IUser extends Document {

    username: string,
    firstname:string,
    lastname:string,
    role: Types.ObjectId;
    created_at:Date,
    local: IUserLocal
    comparePassword(password:string):boolean
}

export interface UserForm {
    username: string,
    firstname:string,
    lastname:string,
    email:string,
    password:string
}

export interface UserInfo{
    username: string,
    firstname:string,
    lastname:string,
}



export interface UserModel extends Model<IUser> {
    hashPassword(password:string):string
  }

  export interface UserjwtToken {
    user:IUser|null,
    id:string|undefined,
}
