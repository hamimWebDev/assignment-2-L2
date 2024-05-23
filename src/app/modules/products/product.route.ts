import express, { Request, Response } from "express";
import Product from "./product.model";
import { productsController } from "./product.controller";
const router = express.Router();

router.post("/",productsController.postProductsFromDb );



export const productsRoute = router;
