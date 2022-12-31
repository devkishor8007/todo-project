import Todo from "../../model/todo.model";
import { Request, Response } from "express";
import { HttpStatus } from "../../config";
import * as utilsResponse from "../../utils/index";

const utils = utilsResponse.default;

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!todo) {
    return utils.sendJsonResponse(
      res,
      HttpStatus.not_found,
      null,
      null,
      null,
      `couldnot found the todo Id ${id}`
    );
  }

  return utils.sendJsonResponse(res, HttpStatus.ok, null, todo, null, null);
};
