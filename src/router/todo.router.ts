import { Router } from "express";
import * as todoController from "../controller/todo/index";
const controller = todoController.default;

const router = Router();

router.get("/todo", controller.getTodos);
router.get("/todo/:id", controller.getTodoById);
router.post("/todo", controller.createTodo);
router.patch("/todo/:id", controller.updateTodo);
router.delete("/todo/:id", controller.softTodo);

export default router;
