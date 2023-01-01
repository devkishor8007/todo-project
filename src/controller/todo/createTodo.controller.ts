import Todo from "../../model/todo.model";
import { Request, Response } from "express";
import { HttpStatus } from "../../config";
import * as utilsResponse from "../../utils/index";

const utils = utilsResponse.default;

export const createTodo = async (req: Request, res: Response) => {
  const { name, description, status, completed_date } = req.body;

  const inputTodo = {
    name,
    description,
    status,
    completed_date
  };

  const { error, value } = utils.todoValidator.validate(inputTodo, { abortEarly: false });

  if (error) {
    console.log(error);

    // for todo ejs response
    return res.render("index", {
      status: HttpStatus.created,
      message: error.details,
    });

    // for todo api response
    // return utils.sendJsonResponse(
    //   res,
    //   HttpStatus.not_found,
    //   null,
    //   null,
    //   null,
    //   error.details[0].message
    // );
  }

  const todo = await Todo.create({
    name: value.name,
    description: value.description,
    status,
    is_deleted: false,
    completed_date,
  });

  // for todo ejs response
  res.render("index", {
    status: HttpStatus.created,
    message: "",
    success: ""
  });

  // for todo api response
  // return utils.sendJsonResponse(
  //   res,
  //   HttpStatus.created,
  //   null,
  //   todo,
  //   null,
  //   null
  // );
};
