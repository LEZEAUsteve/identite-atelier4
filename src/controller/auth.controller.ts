import { NextFunction, Request, Response } from "express";




export const login = async (__:Request, res:Response, _:NextFunction) => {
  
    res.status(404).json( "error" );
  
};

export const me = async (_:Request, res:Response) => {

    res.status(404).json( "error" );
  
};




export const signup = async (__:Request, res:Response, _:NextFunction) => {

  
    res.status(404).json( "error" );
  
};

