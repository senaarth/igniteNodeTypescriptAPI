import { Category } from "../models/Category";

interface ICreateCategoryDTO {
    name: string,
    description: string
}

interface ICategoriesRepository {
    createCategory({name, description}: ICreateCategoryDTO): void;
    listCategories(): Category[]
    findByName(name: string): Category;
}

export { ICategoriesRepository, ICreateCategoryDTO };