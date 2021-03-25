import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

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

    categoriesRepository.createCategory({ name, description });

    return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(404).send();
  }
});

export { categoriesRouter };
