import express from "express";
import * as StockServices from "../services/stockServices.js";

const stockRoutes =  express.Router();

stockRoutes.get("/", StockServices.getStockData);
stockRoutes.post("/", StockServices.insertStockData);
stockRoutes.post("/:id", StockServices.updateStockData);
stockRoutes.delete("/:id", StockServices.deleteStockData);

export default stockRoutes;