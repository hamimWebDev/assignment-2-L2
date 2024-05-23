import express, { Request, Response } from "express";
import Product from "./product.model";
import { productsController } from "./product.controller";
const router = express.Router();
// post route
router.post("/", productsController.postProductsFromDb);
// get All route
router.get("/", productsController.getAllProductsFromDb);

export const productsRoute = router;
