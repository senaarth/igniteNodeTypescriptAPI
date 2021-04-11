import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(req: Request, res: Response): Response {
    try {
      const { name, description } = req.body;

      this.createSpecificationUseCase.execute({ name, description });

      return res.status(201).send();
    } catch (err) {
      console.log(err);
      return res.status(404).json({ Error: err.message });
    }
  }
}

export { CreateSpecificationController };
