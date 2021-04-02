import { CategoriesRepository } from "../../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const alreadyExists = this.categoriesRepository.findByName(name);

    if (alreadyExists) {
      throw new Error("Category name already being used.");
    }

    this.categoriesRepository.createCategory({ name, description });
  }
}

export { CreateCategoryUseCase };
