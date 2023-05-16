import { NextFunction, Request, Response } from "express";
import { findUserPerEmail,createUser } from "../queries/user.queries";
import { createJwtToken,extractUserFromToken } from "../utils/jwt.utils"
import { userSignupValidation } from "../database/validation/user.validation";
import  { ValidationError } from "joi";

export const login = async (req: Request, res: Response, _: NextFunction) => {

    try {
        const { email, password } = req.body;

        const user = await findUserPerEmail(email);

        if (user) {
            const match = user.comparePassword(password);
            if (match) {
                const token = createJwtToken({ user, id: undefined })
                res.status(201).json({
                    token: token,
                });
            } else {
                res.status(404).json({ error: "Mauvais identifiants" });
            }
        } else {
            res.status(404).json({ error: "Mauvais identifiants" });
        }
    } catch (e) {
        res.status(404).json({ error: "Error" });
    }

};

export const me = async (req: Request, res: Response) => {
    
    if (req.headers.authorization  != undefined) {
         res.status(401).json({ error: "Not Authorized" });
      }

      const authHeader = req.headers.authorization as string;
      const token = authHeader.split(" ")[1];
    
      try {
        // Verify the token is valid
        const  user  = extractUserFromToken(token)
        if (user){
           res.status(200).json(user);
        }else{
            res.status(404).json({ error: "Error" });
        }

      } catch (error) {
        res.status(404).json({ error: "Error" });
      }

};




export const signup = async (req: Request, res: Response, _: NextFunction) => {
    try {
        await userSignupValidation.validateAsync(req.body, { abortEarly: false });
    
        const body = req.body;

        const user = await createUser(body);
        const token = createJwtToken({ user, id: undefined })
        res.status(200).json({
            token: token,
        });
        } catch (e) {
        const errors = [];
        if (e instanceof ValidationError) {
          e.details.map((error) => {
            errors.push({ field: error.path[0], message: error.message });
          });
        } else {
            errors.push({ field: "error", message: e })
        }
        res.status(404).send(errors);
      }

};

