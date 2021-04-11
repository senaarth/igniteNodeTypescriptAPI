import multer from "multer";
import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { importCategoriesController } from "../modules/cars/useCases/importCategoires";

const upload = multer({
  dest: "./tmp",
});

const categoriesRouter = Router();

categoriesRouter.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRouter.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRouter.post("/import", upload.single("file"), (req, res) => {
  return importCategoriesController.handle(req, res);
});

export { categoriesRouter };
