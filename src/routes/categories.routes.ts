import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.get("/", (req, res) => {
  try {
    const categories = categoriesRepository.listCategories();
    return res.json({ categories });
  } catch (err) {
    console.log(err);
    return res.status(404).send();
  }
});

categoriesRouter.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

export { categoriesRouter };
