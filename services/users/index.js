import { UsersRepository } from "../../repositories/users/index.js";

const login = async ({ email, password }) => {
  try {
    const data = await UsersRepository.addUser({ email, password });

    return data;
  } catch (error) {
    throw error;
  }
};

export const UsersServices = {
  login,
};
