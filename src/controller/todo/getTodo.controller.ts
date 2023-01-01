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
      // for todo api error response
      return utils.sendJsonResponse(
        res,
        HttpStatus.not_found,
        null,
        null,
        null,
        `couldnot found the todo Id ${id}`
      );
    }

    // for todo ejs response
    res.render("singleTodo", {
      name: "Contact Us",
      status: HttpStatus.created,
      success: "your msg is sent",
      data: todo,
    });

    // for todo api response
    // return utils.sendJsonResponse(res, HttpStatus.ok, null, todo, null, null);
  } catch (error) {
    console.warn(error);
  }
};
