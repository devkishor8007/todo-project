import { Router } from "express";
import { createTodo } from "../controller/todo/createTodo.controller";
import { deleteTodo } from "../controller/todo/deleteTodo.controller";
import { getTodo } from "../controller/todo/getTodo.controller";
import { getTodos } from "../controller/todo/getTodos.controller";
import { updateTodo } from "../controller/todo/updateTodo.controller";

const router = Router();

router.get("/todo", getTodos);
router.get("/todo/:id", getTodo);
router.get("/todo", createTodo);
router.get("/todo/:id", updateTodo);
router.get("/todo/:id", deleteTodo);

export default router;
