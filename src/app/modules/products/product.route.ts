import express, { Request, Response } from "express";
import Product from "./product.model";
import { productsController } from "./product.controller";
const router = express.Router();

// post product
router.post("/", productsController.postProductsFromDb);

// search all iphone
// get All product
router.get("/", productsController.getAllProductsFromDb);

// get A product by id
router.get("/:productId", productsController.getProductByIdFromDb);

// put A product by id
// product.inventory.quantity -= 1
router.put("/:productId", productsController.putProductByIdFromDb);

// delete A product by id
router.delete("/:productId", productsController.deletedProductByIdFromDb);

// product Tasks complete

export const productsRoute = router;
