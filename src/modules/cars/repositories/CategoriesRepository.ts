import { Category } from "../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository{
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  createCategory({ name, description }: ICreateCategoryDTO): void {
    const newCategory = new Category();
    Object.assign(newCategory, {
      name,
      description,
      createdAt: new Date(),
    });
    this.categories.push(newCategory);
  }

  listCategories(): Category[] {
      return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository };
