import { MongoLib } from "../../lib/mongo.js";

const UsersRepository = {
  async addUser({ email, password }) {
    const db = await MongoLib.db();
    const data = await db.collection("users").insertOne({
      email,
      password,
    });

    return data;
  },
};

export { UsersRepository };
