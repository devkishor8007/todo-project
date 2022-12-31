import Todo from "../../model/todo.model";
import { Request, Response } from "express";
import { HttpStatus } from "../../config";
import utils from "../../utils";

export const getTodos = async (req: Request, res: Response) => {
  try {
    if (req.query.status) {
      const haveTodo = await Todo.find({
        status: req.query.status,
        is_deleted: false,
      }).sort({
        updatedAt: "desc",
      });

      return utils.sendJsonResponse(
        res,
        HttpStatus.ok,
        haveTodo.length,
        haveTodo,
        null,
        null
      );
    }

    const todo = await Todo.find({
      is_deleted: false,
    }).sort({
      updatedAt: "desc",
    });

    return utils.sendJsonResponse(
      res,
      HttpStatus.ok,
      todo.length,
      todo,
      null,
      null
    );
  } catch (e) {
    console.log(e);
  }
};
