import jwt from 'jsonwebtoken';

export const generateAccessToken = (user) => (
    data, expiredIn = process.env.JWT_EXPIRED_IN
) => {
    const token = await jwt.sign(data, process.env.JWT_SECRET, { expiredIn });
    return token;
}

export const verifyAccessToken = (token) => {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    return decoded?.userId ?? decoded?.id;
}