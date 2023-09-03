import * as Stock from "../repositories/stock.js";
import { successResponse, errorResponse } from "../utils/response.js";

export const insertStockData = async (req, res, next) => {
   
    try {
        let user_id = req.body.user_id;
        let nama_barang = req.body.nama_barang;
        let  deskripsi = req.body.deskripsi;
        let harga = req.body.harga;
        let jumlah = req.body.jumlah;
    
        const [result] = await Stock.createStock(user_id,nama_barang, deskripsi, harga, jumlah);
        successResponse(res, "berhasil menambahkan stok barang", {barang_id: result.insertId});
    } catch (error) {
        next(error);     
    }
}

export const getStockData = async (req, res, next) => {
    try {
        const [result] = await Stock.getStock(100);
        successResponse(res,"data yang ditampilkan", result);
    } catch (error) {
        next(error);
    }

}

export const updateStockData = async (req, res, next) => {
    try{
        let barang_id = req.params.barang_id;
        let nama_barang = req.body.nama_barang;
        let deskripsi = req.body.deskripsi;
        let harga = req.body.harga;
        let jumlah = req.body.jumlah;
        
        const [result] = await Stock.updateStock(nama_barang, deskripsi, harga, jumlah,barang_id);

        successResponse(res, "data berhasil di update",result[0]); 
    }catch(error){
        next(error);
    }
}

export const deleteStockData = async (req, res, next) => {
    try{
        let barang_id = req.params.barang_id;
        const [result] = await Stock.deleteStock(barang_id);
        successResponse(res, "berhasil hapus data!",result[0]);
    }catch(error){
        next(error);
    }
}