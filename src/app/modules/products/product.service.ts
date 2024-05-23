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

const getProductByIdFromDb = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const putProductByIdFromDb = async (id: string) => {
  const product = await Product.findById(id);
  return product;
};

const deletedProductByIdFromDb = async (id: string) => {
  const result = await Product.updateOne({ _id: id }, { isDeleted: true });
  return result;
};

const searchIPhoneByIdFromDb = async () => {
  const products = await Product.find({
    name: { $regex: "iphone", $options: "i" },
  });
  return products;
};

export const productsService = {
  postProductsFromDb,
  getAllProductsFromDb,
  getProductByIdFromDb,
  deletedProductByIdFromDb,
  putProductByIdFromDb,
  searchIPhoneByIdFromDb,
};
