import * as z from "zod";

// Define Zod schemas for subdocuments
const VariantSchema = z.object({
  type: z.string().nonempty(),
  value: z.string().nonempty(),
});

const InventorySchema = z.object({
  quantity: z.number().positive(),
  inStock: z.boolean(),
});

// Define Zod schema for the main document
const ProductSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  price: z.number().positive(),
  category: z.string().nonempty(),
  tags: z.array(z.string().nonempty()),
  variants: z.array(VariantSchema),
  inventory: InventorySchema,
  isDeleted: z.boolean().optional(),
});

// Define Zod schema for pre-find and pre-findOne hooks
const ProductFindQuerySchema = ProductSchema.omit({ isDeleted: true });

export { ProductSchema, ProductFindQuerySchema };
