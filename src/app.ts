import express, { Request, Response } from "express";
import { productsRoute } from "./app/modules/products/product.route";
import { ordersRoute } from "./app/modules/Orders/orders.route";

export const app = express();

//parsers
app.use(express.json());

app.use("/api/products", productsRoute);

app.use("/api/orders", ordersRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Examiner!");
});

// add git
