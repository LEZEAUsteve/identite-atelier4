import jwt, { JwtPayload } from "jsonwebtoken";
import { findUserPerId } from "../queries/user.queries";
import { UserjwtToken } from "../interfaces";


const key = process.env.API_KEY 





const checkExpirationToken = (token: JwtPayload) => {
    const tokenExp = token.exp;
    const nowInSec = Math.floor(Date.now() / 1000);
    if (tokenExp) {
        if (nowInSec <= tokenExp) {
            return token;
        } else if (nowInSec > tokenExp && nowInSec - tokenExp < 60 * 60 * 24) {
            const refreshedToken = createJwtToken({ user: null, id: token.sub });
            return refreshedToken
        } else {
            return null
        }

    } else {
        return null
    }
}


export const createJwtToken = ({ user, id }: UserjwtToken) => {
    const jwtToken = jwt.sign(
        {
            sub: id || user?._id.toString(),

            exp: Math.floor(Date.now() / 1000) + 5,
        },
        key
    );
    return jwtToken;
};

export const extractUserFromToken = async (token: string) => {
    try {
        const decodedToken = jwt.verify(token, key, { ignoreExpiration: true }) as JwtPayload;
        const decodedTokenCheck = checkExpirationToken(decodedToken);
        if (decodedTokenCheck) {
            return await findUserPerId(decodedTokenCheck.sub as string);
        } else {
            return null
        }
    } catch (e) {
        return null
    }

};




