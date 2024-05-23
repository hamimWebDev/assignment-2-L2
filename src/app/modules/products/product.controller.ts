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

export const productsController = {
  postProductsFromDb,
};
