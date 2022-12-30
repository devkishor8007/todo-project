import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";

require("./db");

const app: express.Application = express();

app.use(helmet());
app.use(cors());
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import todoRouter from "../src/router/todo.router";
app.use("/api/v1", todoRouter);

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Api route not found" });
});

export default app;
