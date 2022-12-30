import Todo from "../../model/todo.model";
import { Request, Response } from "express";
import { HttpStatus } from "../../config";

exports.getTodos = async (req: Request, res: Response) => {
  const todo = await Todo.create(req.body);
  
  res.json({
    success: true,
    statusCode: HttpStatus.ok,
    data: todo,
  });
};
