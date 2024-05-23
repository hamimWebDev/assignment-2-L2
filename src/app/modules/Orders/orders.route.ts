import express, { Request, Response } from "express";
import { ordersController } from "./orders.controller";
import Order from "./orders.model";

const router = express.Router();
// post orders
router.post("/", ordersController.postOrdersFromDb);
// grt All orders and search email
router.get("/", ordersController.getAllOrdersFromDb);

export const ordersRoute = router;
