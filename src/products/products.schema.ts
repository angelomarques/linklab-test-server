import { CategoryType } from "@prisma/client";
import { z } from "zod";

export const listProductsSchema = z.object({
  query: z.object({
    limit: z.string().optional(),
    category: z.nativeEnum(CategoryType).optional(),
  }),
});

export type ListProductsSchemaType = z.infer<typeof listProductsSchema>;

export const createProductSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    image_url: z.string({ required_error: "Image URL is required" }),
    value: z.number({ required_error: "Value is required" }),
    score: z.number({ required_error: "Score is required" }),
    category: z.nativeEnum(CategoryType, {
      required_error: "Category is required",
    }),
  }),
});

export type CreateProductSchemaType = z.infer<typeof createProductSchema>;

export const updateProductSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
  body: z.object({
    name: z.string().optional(),
    image_url: z.string().optional(),
    value: z.number().optional(),
    score: z.number().optional(),
    category: z.nativeEnum(CategoryType).optional(),
  }),
});

export type UpdateProductSchemaType = z.infer<typeof updateProductSchema>;

export const deleteProductSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export type DeleteProductSchemaType = z.infer<typeof deleteProductSchema>;
