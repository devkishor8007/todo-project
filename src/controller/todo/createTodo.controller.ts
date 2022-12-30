import Todo from "../../model/todo.model";
import { Request, Response } from "express";
import { HttpStatus } from "../../config";

export const createTodo = async (req: Request, res: Response) => {
  const { title, description, status } = req.body;
  console.log(req.body);
  
  const todo = new Todo({
    title,
    description,
    status
  });

  await todo.save()

  res.json({
    success: true,
    statusCode: HttpStatus.ok,
    data: todo,
  });
};
