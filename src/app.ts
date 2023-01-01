import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import * as path from "path";

require("./db");

const app: express.Application = express();

app.use(helmet());
app.use(cors());
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dir = path.join(__dirname, 'public');
app.use(express.static(dir));

//initalize our path
const main = path.join(__dirname, './templates/views');

//set the engine for ejs
app.set('view engine', "ejs");
app.set('views', main);

app.get('/', (req, res) => {
  res.render('index', {
    message: "",
    success: ""
  });
})

import todoRouter from "../src/router/todo.router";
app.use("/api/v1", todoRouter);

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Api route not found" });
});

export default app;
