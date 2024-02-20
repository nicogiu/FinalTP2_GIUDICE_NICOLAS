import { Router } from "express";
import XController from "../controllers/XController.js";
const xRoutes = Router();
const xController = new XController();

xRoutes.post("/", xController.create);
xRoutes.get("/", xController.getAll)

//xRoutes.post("/prueba",(req,res) => {res.send("ok")})


export default xRoutes;
