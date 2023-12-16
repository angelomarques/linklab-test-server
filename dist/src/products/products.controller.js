"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const products_service_1 = require("./products.service");
const library_1 = require("@prisma/client/runtime/library");
const productsService = new products_service_1.ProductsService();
class ProductsController {
    listProductsHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queryParams = req.query;
                const products = yield productsService.listProducts(queryParams);
                res.status(200).json(products);
                return products;
            }
            catch (err) {
                res.status(500).json(err.message);
            }
        });
    }
    createProductHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const newProduct = yield productsService.createProduct(data);
                return res.status(201).json(newProduct);
            }
            catch (err) {
                if (err instanceof library_1.PrismaClientKnownRequestError) {
                    if (err.code === "P2002") {
                        return res.status(409).json({ message: "Product already created." });
                    }
                }
                return res.status(500).json(err.message);
            }
        });
    }
    updateProductHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const data = req.body;
                const updatedProduct = yield productsService.updateProduct(id, data);
                return res.status(200).json(updatedProduct);
            }
            catch (err) {
                return res.status(500).json(err.message);
            }
        });
    }
    deleteProductHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield productsService.deleteProduct(id);
                return res.status(200).json({ message: "Product successfully deleted." });
            }
            catch (err) {
                return res.status(500).json(err.message);
            }
        });
    }
}
exports.ProductsController = ProductsController;
