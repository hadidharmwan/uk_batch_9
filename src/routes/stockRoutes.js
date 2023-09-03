import express from "express";
import * as StockServices from "../services/stockServices.js";
import * as User from "../services/userServices.js";


const stockRoutes =  express.Router();

stockRoutes.get("/", User.validateToken, StockServices.getStockData);
stockRoutes.post("/",User.validateToken, StockServices.insertStockData);
stockRoutes.put("/:id", StockServices.updateStockData);
stockRoutes.delete("/:id", StockServices.deleteStockData);
stockRoutes.put("/kurang/total_stok", StockServices.kurangStokBarang); 
stockRoutes.put("/tambah/total_stok", StockServices.tambahStokBarang); 
stockRoutes.get("/:nama_barang", StockServices.getStockDataByName);



export default stockRoutes;