import Todo from "../../model/todo.model";
import { Request, Response, NextFunction } from "express";
import { HttpStatus } from "../../config";
import * as utilsResponse from "../../utils/index";

const utils = utilsResponse.default;

export const softTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const todo = await Todo.findById(id, { is_deleted: false }).exec();
  console.log(todo, "w");

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

  await Todo.findByIdAndUpdate(
    id,
    { is_deleted: true },
    { new: true, runValidators: true }
  );

  return utils.sendJsonResponse(
    res,
    HttpStatus.ok,
    null,
    null,
    `deleted ${id}`,
    null
  );
};
