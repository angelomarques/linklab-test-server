import { db } from "../utlis/db.server";
import { Product } from "@prisma/client";
import {
  CreateProductSchemaType,
  ListProductsSchemaType,
  UpdateProductSchemaType,
} from "./products.schema";

export class ProductsService {
  public async listProducts(
    queryParams: ListProductsSchemaType["query"]
  ): Promise<Product[]> {
    return db.product.findMany({
      where: {
        category: queryParams.category,
      },
      take: Number(queryParams.limit) || undefined,
      orderBy: {
        updatedAt: "desc",
      },
    });
  }

  public async createProduct(
    data: CreateProductSchemaType["body"]
  ): Promise<Product> {
    return db.product.create({ data });
  }

  public async updateProduct(
    id: string,
    data: UpdateProductSchemaType["body"]
  ): Promise<Product> {
    return db.product.update({ where: { id }, data });
  }

  public async deleteProduct(id: string): Promise<any> {
    return db.product.delete({ where: { id } });
  }
}
