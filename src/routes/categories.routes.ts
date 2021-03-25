import { Router } from "express";
import { Category } from "../models/Category";

const categoriesRouter = Router();

const categories: Category[] = [];

categoriesRouter.get("/", (req, res) => {
  try {
    return res.json({ message: "Categories routes." });
  } catch (err) {
    console.log(err);
    return res.status(404).send();
  }
});

categoriesRouter.post("/", (req, res) => {
  try {
    const { name, description } = req.body;

    const newCategory = new Category();
    Object.assign(newCategory, {
        name, 
        description,
        createdAt: new Date()
    });

    categories.push(newCategory);

    return res.status(201).json({ newCategory });
  } catch (err) {
    console.log(err);
    return res.status(404).send();
  }
});

export { categoriesRouter };
