import { Router } from "express";
import xRoutes from "./xRoutes.js";
import { notFound } from "../midlewares/notFound.js";
const router = Router();

router.use("/x", xRoutes)
router.use(notFound)

export default router;
