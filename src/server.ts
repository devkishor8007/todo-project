import dotenv from "dotenv";
dotenv.config();

import { NODE_ENV, NODE_PORT } from "./config";

import app from "./app";

if (NODE_ENV === "development") {
  app.listen(NODE_PORT, () => {
    console.log(`server running on http://localhost:${NODE_PORT}/api/v1/todo!`);
  });
} else {
  console.log(`server is not running`);
}
