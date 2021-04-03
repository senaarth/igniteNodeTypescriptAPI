import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRouter = Router();
const specificationsRepository = new SpecificationsRepository;

specificationsRouter.post("/", (req, res) => {
  try {
      const createSpecificationService = new CreateSpecificationService(specificationsRepository);
      createSpecificationService.execute(req.body);
      return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(404).json({ Error: err.message });
  }
});

export { specificationsRouter };
