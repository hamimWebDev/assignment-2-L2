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

// put A product by id
// product.inventory.quantity -= 1
router.put("/:productId", productsController.putProductByIdFromDb);

// delete A product by id
router.delete("/:productId", productsController.deletedProductByIdFromDb);

// search all iphone
// /api/products/search/iphone
router.get("/search/iphone", productsController.searchIPhoneByIdFromDb);

// product Tasks complete

export const productsRoute = router;
