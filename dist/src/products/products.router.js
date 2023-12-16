"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateResource_1 = require("../middlewares/validateResource");
const products_schema_1 = require("./products.schema");
const products_controller_1 = require("./products.controller");
exports.productsRouter = express_1.default.Router();
const productsController = new products_controller_1.ProductsController();
exports.productsRouter.get("/", (0, validateResource_1.validateResource)(products_schema_1.listProductsSchema), productsController.listProductsHandler);
exports.productsRouter.post("/", (0, validateResource_1.validateResource)(products_schema_1.createProductSchema), productsController.createProductHandler);
exports.productsRouter.patch("/:id", (0, validateResource_1.validateResource)(products_schema_1.updateProductSchema), productsController.updateProductHandler);
exports.productsRouter.delete("/:id", (0, validateResource_1.validateResource)(products_schema_1.deleteProductSchema), productsController.deleteProductHandler);
