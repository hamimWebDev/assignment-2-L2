import express, { Request, Response } from "express";
import Product from "./product.model";
import { productsController } from "./product.controller";
const router = express.Router();
// post route
router.post("/", productsController.postProductsFromDb);
// get All route
router.get("/", productsController.getAllProductsFromDb);
// get A product by id
router.get("/:productId", productsController.getProductByIdFromDb);
// delete A product by id
router.delete("/:productId", productsController.deletedProductByIdFromDb);

export const productsRoute = router;
