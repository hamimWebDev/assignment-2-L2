import { Request, Response } from "express";
import { productsService } from "./product.service";

const postProductsFromDb = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await productsService.postProductsFromDb(productData);

    res.json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

const getAllProductsFromDb = async (req: Request, res: Response) => {
  try {
    const result = await productsService.getAllProductsFromDb();

    res.json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

const getProductByIdFromDb = async (req: Request, res: Response) => {
  try {
    const _id = req.params.productId;
    const result = await productsService.getProductByIdFromDb(_id);

    res.json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

const deletedProductByIdFromDb = async (req: Request, res: Response) => {
  try {
    const _id = req.params.productId;
    const result = await productsService.deletedProductByIdFromDb(_id);

    res.json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

export const productsController = {
  postProductsFromDb,
  getAllProductsFromDb,
  getProductByIdFromDb,
  deletedProductByIdFromDb
};
