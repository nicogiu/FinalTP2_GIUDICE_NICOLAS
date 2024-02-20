import { Router } from "express";
import XController from "../controllers/XController.js";
const xRoutes = Router();
const xController = new XController();

xRoutes.post("/", xController.create);
xRoutes.get("/", xController.getAll)



export default xRoutes;
