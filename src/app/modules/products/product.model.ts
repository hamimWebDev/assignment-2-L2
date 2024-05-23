import mongoose, { Schema, Model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

// Create Mongoose schema model
const VariantSchema: Schema<TVariant> = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const InventorySchema: Schema<TInventory> = new Schema({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const ProductSchema: Schema<TProduct> = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [VariantSchema], required: true },
  inventory: { type: InventorySchema, required: true },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

ProductSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

ProductSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// Create and export the Mongoose model
const Product: Model<TProduct> = mongoose.model<TProduct>(
  "Product",
  ProductSchema,
);

export default Product;
