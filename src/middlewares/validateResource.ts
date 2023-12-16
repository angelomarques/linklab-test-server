import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";

export const validateResource =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (err: any) {
        if (err instanceof ZodError) {
            return res.status(422).send(err.errors[0])
        }
      return res.status(400).send(err);
    }
  };