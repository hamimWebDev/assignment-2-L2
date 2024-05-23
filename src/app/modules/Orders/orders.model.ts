import mongoose, { Document, Schema } from "mongoose";

// Define the TypeScript interface for the Order
interface IOrder extends Document {
  email: string;
  productId: mongoose.Types.ObjectId;
  price: number;
  quantity: number;
}

// Define the schema
const orderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

// Create the model
const Order = mongoose.model<IOrder>("Order", orderSchema);

export default Order;
