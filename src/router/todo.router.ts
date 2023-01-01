import { Router } from "express";
import * as todoController from "../controller/todo/index";
const controller = todoController.default;

const router = Router();

// for ejs todo endpoint
router.get("/todo", controller.getTodos);
router.get("/todo/:id", controller.getTodoById);
router.post("/todo", controller.createTodo);
router.get("/todo/update/:id", controller.updateTodo);
router.post("/todo/update/:id", controller.updateTodo);
router.get("/todo/delete/:id", controller.softTodo);

// for todo endpoint
// router.get("/todo", controller.getTodos);
// router.get("/todo/:id", controller.getTodoById);
// router.post("/todo", controller.createTodo);
// router.patch("/todo/:id", controller.updateTodo);
// router.delete("/todo/:id", controller.softTodo);

export default router;
