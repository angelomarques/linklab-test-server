"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResource = void 0;
const zod_1 = require("zod");
const validateResource = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    }
    catch (err) {
        if (err instanceof zod_1.ZodError) {
            return res.status(422).send(err.errors[0]);
        }
        return res.status(400).send(err);
    }
};
exports.validateResource = validateResource;
