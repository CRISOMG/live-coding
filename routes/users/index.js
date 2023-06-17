import { Router } from "express";
import { UsersServices } from "../../services/users/index.js";

const UsersRouter = Router();

UsersRouter.post("/login", async (req, res, next) => {
  try {
    const { body } = req;

    const data = await UsersServices.login(body);

    res.json(data);
  } catch (error) {
    next(error);
  }
});

export { UsersRouter };
