import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  
  handle(req: Request, res: Response): Response {
    try {
      const categories = this.listCategoriesUseCase.execute();
      return res.json({ categories });
    } catch (err) {
      console.log(err);
      return res.status(404).send();
    }
  }
}

export { ListCategoriesController };
