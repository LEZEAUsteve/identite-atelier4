import { NextFunction, Request, Response } from "express";
import { findUserPerEmail } from "../queries/user.queries";
import { createJwtToken } from "../utils/jwt.utils"



export const login = async (req: Request, res: Response, _: NextFunction) => {

    try {
        const { email, password } = req.body;

        const user = await findUserPerEmail(email);

        if (user) {
            const match = user.comparePassword(password);
            if (match) {
                const token = createJwtToken({ user, id: undefined })
                res.status(200).json({
                    token: token,
                });
            } else {
                res.status(404).json({ message: "Mauvais identifiants" });
            }
        } else {
            res.status(404).json({ message: "Mauvais identifiants" });
        }
    } catch (e) {
        res.status(404).json({ message: "Error" });
    }

};

export const me = async (_: Request, res: Response) => {

    res.status(404).json("error");

};




export const signup = async (__: Request, res: Response, _: NextFunction) => {


    res.status(404).json("error");

};

