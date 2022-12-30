import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose
  .connect("mongo://mongodb:27017/test")
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((e) => {
    console.log("mongodb is connected");
  });
