import { TProduct } from "./product.interface";
import Product from "./product.model";

const postProductsFromDb = async (pData: TProduct) => {
  const result = await Product.create(pData);
  return result;
};

const getAllProductsFromDb = async () => {
  const result = await Product.find();
  return result;
};

const getProductsByIdFromDb = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

export const productsService = {
  postProductsFromDb,
  getAllProductsFromDb,
  getProductsByIdFromDb,
};
