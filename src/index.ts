import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { productsRouter } from "./products/products.router";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import * as swaggerDocument from "../swagger.json";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/api/products", productsRouter);

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Linklab Test API",
      version: "0.1.0",
      description: "",
    },
    schemes: ["http", "https"],
    servers: [{ url: "http://localhost:3000/" }],
  },
  apis: ["./products/products.router.ts"],
};

const specs = swaggerJSDoc(options);
app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      tryItOutEnabled: false,
    },
  })
);

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
