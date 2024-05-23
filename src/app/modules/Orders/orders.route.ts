import express from "express";
import { ordersController } from "./orders.controller";

const router = express.Router();

router.post("/", ordersController.postOrdersFromDb);

export const ordersRoute = router;
