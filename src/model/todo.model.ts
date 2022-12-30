import { Schema, model, Types } from "mongoose";

enum TodoStatus {
  completed = "completed",
  not_completed = "not_completed",
}

interface ITodoSchema {
  _id: Types.ObjectId;
  title: string;
  description: string;
  status: TodoStatus;
  is_deleted: boolean;
}

const todoSchema = new Schema<ITodoSchema>(
  {
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["completed", "not_completed"],
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = model<ITodoSchema>("Todo", todoSchema);

export default Todo;
