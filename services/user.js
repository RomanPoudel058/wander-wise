import User from '../models/user.js';

export const create = async (data) => {
    return User.create(data);
}