import { Request, Response } from "express";
import {
  CreateProductSchemaType,
  DeleteProductSchemaType,
  ListProductsSchemaType,
  UpdateProductSchemaType,
} from "./products.schema";

import { ProductsService } from "./products.service";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Delete, Get, Patch, Post, Route } from "tsoa";
import { Product } from "@prisma/client";

const productsService = new ProductsService();

export class ProductsController {
  public async listProductsHandler(
    req: Request<{}, {}, {}, ListProductsSchemaType["query"]>,
    res: Response
  ): Promise<Product[]|undefined> {
    try {
      const queryParams = req.query;
      const products = await productsService.listProducts(queryParams);

      res.status(200).json(products);
      return products
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }

  public async createProductHandler(
    req: Request<{}, {}, CreateProductSchemaType["body"]>,
    res: Response
  ) {
    try {
      const data = req.body;
      const newProduct = await productsService.createProduct(data);

      return res.status(201).json(newProduct);
    } catch (err: any) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          return res.status(409).json({ message: "Product already created." });
        }
      }
      return res.status(500).json(err.message);
    }
  }

  public async updateProductHandler(
    req: Request<
      UpdateProductSchemaType["params"],
      {},
      UpdateProductSchemaType["body"]
    >,
    res: Response
  ) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedProduct = await productsService.updateProduct(id, data);

      return res.status(200).json(updatedProduct);
    } catch (err: any) {
      return res.status(500).json(err.message);
    }
  }

  public async deleteProductHandler(
    req: Request<DeleteProductSchemaType["params"]>,
    res: Response
  ) {
    try {
      const { id } = req.params;
      await productsService.deleteProduct(id);

      return res.status(200).json({ message: "Product successfully deleted." });
    } catch (err: any) {
      return res.status(500).json(err.message);
    }
  }
}
