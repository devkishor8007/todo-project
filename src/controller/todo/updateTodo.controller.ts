import Todo from "../../model/todo.model";
import { Request, Response } from "express";
import * as utilsResponse from "../../utils/index";

const utils = utilsResponse.default;

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!todo) {
    // for todo ejs response
    return res.render("update", {
      message: "",
      data: "",
      showDate: "",
    });

    // for todo api response
    // return utils.sendJsonResponse(
    //   res,
    //   HttpStatus.not_found,
    //   null,
    //   null,
    //   null,
    //   `couldnot found the todo Id ${id}`
    // );
  }

  // for todo ejs response
  return res.render("update", {
    message: "update",
    data: todo,
    showDate: new Date(todo.completed_date).toISOString().slice(0, 10),
  });

  // for todo api response
  // return utils.sendJsonResponse(res, HttpStatus.ok, null, todo, null, null);
};
