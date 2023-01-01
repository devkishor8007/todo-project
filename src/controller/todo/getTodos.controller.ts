import Todo from "../../model/todo.model";
import { Request, Response } from "express";
import { HttpStatus } from "../../config";
import utils from "../../utils";

export const getTodos = async (req: Request, res: Response) => {
  if (req.query.status) {
    const haveTodo = await Todo.find({
      ...(req.query.status !== "all" && { status: req.query.status }),
      is_deleted: false,
    }).sort({
      updatedAt: "desc",
    });

    // for todo ejs response
    return res.render("viewTodo", {
      data: haveTodo,
      status: HttpStatus.created,
    });

    // for todo api response
    // return utils.sendJsonResponse(
    //   res,
    //   HttpStatus.ok,
    //   haveTodo.length,
    //   haveTodo,
    //   null,
    //   null
    // );
  }

  const todo = await Todo.find({
    is_deleted: false,
  }).sort({
    updatedAt: "desc",
  });

  // for todo ejs response
  return res.render("viewTodo", {
    status: HttpStatus.created,
    data: todo,
  });

  // for todo api response
  // return utils.sendJsonResponse(
  //   res,
  //   HttpStatus.ok,
  //   todo.length,
  //   todo,
  //   null,
  //   null
  // );
};
