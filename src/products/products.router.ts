import express from "express";
import { validateResource } from "../middlewares/validateResource";
import {
  createProductSchema,
  deleteProductSchema,
  listProductsSchema,
  updateProductSchema,
} from "./products.schema";

import { ProductsController } from "./products.controller";

export const productsRouter = express.Router();

const productsController = new ProductsController();

productsRouter.get(
  "/",
  validateResource(listProductsSchema),
  productsController.listProductsHandler
);

productsRouter.post(
  "/",
  validateResource(createProductSchema),
  productsController.createProductHandler
);

productsRouter.patch(
  "/:id",
  validateResource(updateProductSchema),
  productsController.updateProductHandler
);

productsRouter.delete(
  "/:id",
  validateResource(deleteProductSchema),
  productsController.deleteProductHandler
);
