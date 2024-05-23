import express, { Request, Response } from "express";
import { productsRoute } from "./app/modules/products/product.route";

export const app = express();

//parsers
app.use(express.json());

app.use("/api/products", productsRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
