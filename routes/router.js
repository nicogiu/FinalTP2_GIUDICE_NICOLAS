import { Router } from "express";
import bookRoutes from "./bookRoutes.js";
import { notFound } from "../middlewares/notFound.js";
const router = Router();

router.use("/book", bookRoutes)
router.use(notFound)

export default router;
