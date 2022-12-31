import Todo from "../../model/todo.model";
import { Request, Response } from "express";
import { HttpStatus } from "../../config";
import * as utilsResponse from "../../utils/index";
import console from "console";

const utils = utilsResponse.default;

export const getTodoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id, { is_deleted: false });

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
  } catch (error) {
    console.warn(error);
  }
};
