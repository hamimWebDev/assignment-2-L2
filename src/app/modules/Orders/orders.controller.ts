import { Request, Response } from "express";
import { ordersService } from "./orders.service";
import Order from "./orders.model";
import orderSchema from "./order.zod.validation";

const postOrdersFromDb = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodData = orderSchema.parse(orderData);
    const result = await ordersService.postOrdersFromDb(zodData);

    res.json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};
const getAllOrdersFromDb = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    if (typeof email == "undefined") {
      const result = await ordersService.getAllOrdersFromDb();

      res.json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    } else if (typeof email !== "undefined") {
      const orders = await Order.find({ email: { $eq: email } });
      return res.json(orders);
    }
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

export const ordersController = {
  postOrdersFromDb,
  getAllOrdersFromDb,
};
