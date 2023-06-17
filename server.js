import express from "express";
import { UsersRouter } from "./routes/users/index.js";
// const express = require('express')
import cors from "cors";
import morgan from "morgan";

const app = express();

export const server = () => {
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: "*",
    })
  );
  app.get("/*", (req, res, next) => {
    try {
      res.json({ Hello: "World" });
    } catch (error) {
      next(error);
    }
  });

  app.use("/users", UsersRouter);

  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`APP listen on port ${port}`);
  });
};
