import { Document, Schema, model } from "mongoose";

enum TodoStatus {
  completed = "completed",
  not_completed = "not_completed",
}

interface ITodoSchema extends Document {
  title: string;
  description: string;
  status: any;
  createdAt: any;
}

const todoSchema = new Schema<ITodoSchema>({
  title: {
    type: String,
    required: [true, "Please add a title"],
    maxlength: [300, "title can not more than 300 Characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [600, "description can not more than 600 Characters"],
  },
  status: {
    type: String,
    enum: Object.values(TodoStatus),
    default: TodoStatus.not_completed,
    required: [false, "Optional"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Todo = model<ITodoSchema>("Todo", todoSchema);

export default Todo;
