import { MongoLib } from "./lib/mongo.js";
import { server } from "./server.js";
import dotenv from "dotenv";

(async () => {
  const _ = dotenv.config();

  await MongoLib.connect();

  server();
})();
