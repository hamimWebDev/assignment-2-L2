import { Request, Response } from "express";
import { ordersService } from "./orders.service";

const postOrdersFromDb = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await ordersService.postOrdersFromDb(orderData);

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

export const ordersController = {
  postOrdersFromDb,
};
