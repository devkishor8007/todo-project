import dotenv from "dotenv";
import { NODE_PORT } from "./config";
dotenv.config();

import app from "./app";

app.listen(NODE_PORT, () => {
  console.log(`server running on http://localhost:${NODE_PORT}/api/v1/todo!`);
});
