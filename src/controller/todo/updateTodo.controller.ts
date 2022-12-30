import Todo from "../../model/todo.model";
import { Request, Response, NextFunction } from "express";
import { HttpStatus } from "../../config";

exports.updateTodo = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });;

    if (!todo) {
      return next(new ErrorResponse(`couldnot found the todo Id ${id}`, HttpStatus.not_found));
    }

    res.json({
      success: true,
      statusCode: HttpStatus.ok,
      data: todo,
    });
};
