"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductSchema = exports.updateProductSchema = exports.createProductSchema = exports.listProductsSchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.listProductsSchema = zod_1.z.object({
    query: zod_1.z.object({
        limit: zod_1.z.string().optional(),
        category: zod_1.z.nativeEnum(client_1.CategoryType).optional(),
    }),
});
exports.createProductSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }),
        image_url: zod_1.z.string({ required_error: "Image URL is required" }),
        value: zod_1.z.number({ required_error: "Value is required" }),
        score: zod_1.z.number({ required_error: "Score is required" }),
        category: zod_1.z.nativeEnum(client_1.CategoryType, {
            required_error: "Category is required",
        }),
    }),
});
exports.updateProductSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string(),
    }),
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        image_url: zod_1.z.string().optional(),
        value: zod_1.z.number().optional(),
        score: zod_1.z.number().optional(),
        category: zod_1.z.nativeEnum(client_1.CategoryType).optional(),
    }),
});
exports.deleteProductSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string(),
    }),
});
