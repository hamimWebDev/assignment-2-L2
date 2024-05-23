import { Request, Response } from "express";
import { productsService } from "./product.service";
import { ProductSchema } from "./product.zod.validation";

const postProductsFromDb = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodData = ProductSchema.parse(productData);
    const result = await productsService.postProductsFromDb(zodData);

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
    const searchTerm = req.query.searchTerm as string;

    if (typeof searchTerm == "undefined") {
      const result = await productsService.getAllProductsFromDb();

      res.json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    } else if (typeof searchTerm !== "undefined") {
      const result = await productsService.searchIPhoneByIdFromDb();

      res.json({
        success: true,
        message: "Products matching search term 'iphone' fetched successfully!",
        data: result,
      });
    }
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
const putProductByIdFromDb = async (req: Request, res: Response) => {
  try {
    const updateData = req.body;
    const _id = req.params.productId;
    const product = await productsService.putProductByIdFromDb(_id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Update product data
    Object.assign(product, updateData);

    // Decrease inventory quantity by 1
    if (product.inventory.quantity > 0) {
      product.inventory.quantity -= 1;
    } else {
      return res.status(400).json({
        success: false,
        message: "Insufficient inventory quantity",
      });
    }

    const updatedProduct = await product.save();
    res.json({
      success: true,
      message: "Product updated successfully!",
      data: updatedProduct,
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
  deletedProductByIdFromDb,
  putProductByIdFromDb,
};
