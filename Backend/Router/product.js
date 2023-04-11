import express from "express";
import { Delete, GetAll, GetOne, Update, create } from "../controllers/product";
import { CheckPermission } from "../middlewares/CheckPermission";
const router = express.Router();

router.post("/product", CheckPermission, create);
router.get("/product", GetAll);
router.get("/product/:id", GetOne);
router.put("/product/:id", CheckPermission, Update);
router.delete("/product/:id", CheckPermission, Delete);
// CheckPermission

export default router;
