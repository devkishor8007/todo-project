import Todo from "../../model/todo.model";
import { Request, Response } from "express";
import { HttpStatus } from "../../config";
import * as utilsResponse from "../../utils/index";

const utils = utilsResponse.default;

export const createTodo = async (req: Request, res: Response) => {
  const { name, description, status } = req.body;

  const inputTodo = {
    name,
    description,
    status,
  };

  const { error, value } = utils.todoValidator.validate(inputTodo);

  if (error) {
    return utils.sendJsonResponse(
      res,
      HttpStatus.not_found,
      null,
      null,
      null,
      error.details[0].message
    );
  }

  const todo = await Todo.create({
    name: value.name,
    description: value.description,
    status,
    is_deleted: false,
  });

  return utils.sendJsonResponse(
    res,
    HttpStatus.created,
    null,
    todo,
    null,
    null
  );
};
