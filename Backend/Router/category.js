import express from "express";
import {
  Delete,
  GetAll,
  GetOne,
  Update,
  create,
} from "../controllers/category";
import { CheckPermission } from "../middlewares/CheckPermission";

const CategoryRoute = express.Router();

CategoryRoute.post("/Category", CheckPermission, create);
CategoryRoute.get("/Category/:id", GetOne);
CategoryRoute.get("/Category", GetAll);
CategoryRoute.delete("/Category/:id", CheckPermission, Delete);
CategoryRoute.put("/Category/:id", CheckPermission, Update);

export default CategoryRoute;
