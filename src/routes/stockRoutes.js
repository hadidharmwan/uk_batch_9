import express from "express";
import * as StockServices from "../services/stockServices.js";
import { validateToken } from "../services/userServices.js";


const stockRoutes =  express.Router();

stockRoutes.get("/", validateToken, StockServices.getStockData);
stockRoutes.post("/",validateToken, StockServices.insertStockData);
stockRoutes.put("/:id",validateToken, StockServices.updateStockData);
stockRoutes.delete("/:id",validateToken, StockServices.deleteStockData);
stockRoutes.put("/kurang/total_stok",validateToken, StockServices.kurangStokBarang); 
stockRoutes.put("/tambah/total_stok",validateToken, StockServices.tambahStokBarang); 
stockRoutes.get("/:nama_barang",validateToken, StockServices.getStockDataByName);



export default stockRoutes;