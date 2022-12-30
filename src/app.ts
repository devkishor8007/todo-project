import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import express, { Request, Response } from "express";
import { NODE_PORT } from "./config";
import helmet from "helmet";
require("./db");

const app: express.Application = express();

app.use(helmet());
app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import todoRouter from "../src/router/todo.router";
app.use('/api/v1', todoRouter);

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Api route not found" });
});

app.listen(NODE_PORT, () => {
  console.log(`Example app listening on port ${NODE_PORT}!`);
});
