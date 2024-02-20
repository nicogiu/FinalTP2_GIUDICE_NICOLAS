import { Router } from "express";
import bookController from "../controllers/bookController.js";
const bookRoutes = Router();
const booksController = new bookController();

bookRoutes.post("/", booksController.create);

bookRoutes.delete("/:code", booksController.removeBook)

bookRoutes.get("/", booksController.getAll)

bookRoutes.get("/status", booksController.listByStatus)

bookRoutes.get("/:code", booksController.getBookByCode)

bookRoutes.put("/status/:code", booksController.changeStatus)


export default bookRoutes;
