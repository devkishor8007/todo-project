import mongoose from "mongoose";
import { MONGO_URI } from "./config";

mongoose.set("strictQuery", false);
mongoose
  .connect(`${MONGO_URI}`)
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((e) => {
    console.log("mongodb is connected");
  });

const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "connection error:"));
connection.on("open", function () {
  console.log("connection is success");
});
