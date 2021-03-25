import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

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
  try {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoryService(
      categoriesRepository
    );

    createCategoryService.execute({ name, description });

    return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(404).json({ Error: err.message });
  }
});

export { categoriesRouter };
