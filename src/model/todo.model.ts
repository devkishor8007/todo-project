import { Schema, model } from "mongoose";
import { StatusType } from "../enums/StatusType";
import { ITodo } from "../interfaces/ITodo";

const todoSchema = new Schema<ITodo>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: String,
      enum: ["completed", "not_completed"],
      default: StatusType.not_completed,
      required: false,
    },
    is_deleted: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = model<ITodo>("Todo", todoSchema);

export default Todo;
