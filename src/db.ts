import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((e) => {
    console.log("mongodb is connected");
  });

const connection = mongoose.connection;
connection.on("open", function () {
  console.log("connection is success");
});
