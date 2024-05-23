import { TOrder } from "./orders.interface";
import Order from "./orders.model";

const postOrdersFromDb = async (OData: TOrder) => {
  const result = await Order.create(OData);
  return result;
};

const getAllOrdersFromDb = async () => {
  const result = await Order.find();
  return result;
};

export const ordersService = {
  postOrdersFromDb,
  getAllOrdersFromDb,
};
