import dotenv from "dotenv";
dotenv.config();

import { NODE_PORT } from "./config";

import app from "./app";

app.listen(NODE_PORT, () => {
  console.log(`server running on http://localhost:${NODE_PORT}!`);
});
