import Todo from "../../model/todo.model";
import { Request, Response, NextFunction } from "express";
import { HttpStatus } from "../../config";
import { ErrorResponse } from "../../utils/errorResponse";

export const getTodo = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);

    if (!todo) {
      return next(new ErrorResponse(`couldnot found the todo Id ${id}`, HttpStatus.not_found));
    }

    res.json({
      success: true,
      statusCode: HttpStatus.ok,
      data: todo,
    });
};
