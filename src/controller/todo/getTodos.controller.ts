import Todo from "../../model/todo.model";
import { Request, Response } from "express";
import { HttpStatus } from "../../config";

export const getTodos = async (_req: Request, res: Response) => {
  const todo = await Todo.find({});

  return res.json({
    success: true,
    statusCode: HttpStatus.ok,
    count: todo.length,
    data: todo,
  });
};
