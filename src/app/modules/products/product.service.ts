import { TProduct } from "./product.interface";
import Product from "./product.model";

const postProductsFromDb = async (pData: TProduct) => {
  const result = await Product.create(pData);
  return result;
};

export const productsService = {
  postProductsFromDb,
};
