import * as z from "zod";

// Define the Zod schema for the Order
const orderSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number().min(0),
  quantity: z.number().min(0),
});

// Define a type alias for the Order schema
type OrderSchema = z.infer<typeof orderSchema>;

export default orderSchema;
export { OrderSchema };
