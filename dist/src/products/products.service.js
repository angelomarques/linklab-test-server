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
exports.ProductsService = void 0;
const db_server_1 = require("../utlis/db.server");
class ProductsService {
    listProducts(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            return db_server_1.db.product.findMany({
                where: {
                    category: queryParams.category,
                },
                take: Number(queryParams.limit) || undefined,
                orderBy: {
                    updatedAt: "desc",
                },
            });
        });
    }
    createProduct(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return db_server_1.db.product.create({ data });
        });
    }
    updateProduct(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return db_server_1.db.product.update({ where: { id }, data });
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return db_server_1.db.product.delete({ where: { id } });
        });
    }
}
exports.ProductsService = ProductsService;
