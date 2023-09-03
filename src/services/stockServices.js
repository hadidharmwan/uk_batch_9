import * as Stock from "../repositories/stock.js";
import { successResponse } from "../utils/response.js";

export const insertStockData = async (req, res, next) => {
   
    try {
        let user_id = req.claims.id;
        let nama_barang = req.body.nama_barang;
        let  deskripsi = req.body.deskripsi;
        let harga = req.body.harga;
        let jumlah = req.body.jumlah;

        const [result] = await Stock.getStockByName(nama_barang);
        if(result.length > 0){
            const stock =  result[0];
            if (nama_barang == stock.nama_barang){
                successResponse(res, "nama barang sudah terdaftar, ubah nama!");
            }
        }else if(nama_barang == "" && deskripsi == "" && harga == "" && jumlah == 0){
            successResponse(res, "harus diisi");
        }else{
            const [result] = await Stock.createStock(user_id,nama_barang, deskripsi, harga, jumlah);
            successResponse(res, "berhasil menambahkan stok barang", {barang_id: result.insertId});

        }
    
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

export const getStockDataByName = async (req, res, next) => {
    try {
        let nama_barang = req.params.nama_barang;
        const [result] = await Stock.getStockByName(nama_barang);
        successResponse(res,"data yang ditampilkan", result[0]);
    } catch (error) {
        next(error);
    }

}

export const updateStockData = async (req, res, next) => {
    try{
        let barang_id = req.params.id;
        let nama_barang = req.body.nama_barang;
        let deskripsi = req.body.deskripsi;
        let harga = req.body.harga;
        let jumlah = req.body.jumlah;

        const [result] = await Stock.getStockByName(nama_barang);
        if(nama_barang == "" && deskripsi == "" && harga == "" && jumlah == 0){
            successResponse(res, "harus diisi");
        }
        else{
            
            const [result] = await Stock.updateDataStock(nama_barang, deskripsi, harga, jumlah,barang_id);
            successResponse(res, "data berhasil di update",result[0]); 
        }
    }catch(error){
        next(error);
    }
}

export const deleteStockData = async (req, res, next) => {
    try{
        let id = req.params.id;
        const [result] = await Stock.deleteStock(id);
        successResponse(res, "berhasil hapus data!",result[0]);
    }catch(error){
        next(error);
    }
}

export const kurangStokBarang = async (req, res, next) => {
    try {
        let barang_id = req.body.barang_id;
        let angka = req.body.angka;
        const [result] = await Stock.kurangiStok(angka, barang_id);

        successResponse(res, "jumlah stok berhasil dikurangi",result[0]);
        
    } catch (error) {
        next(error);
    }
}

export const tambahStokBarang = async (req, res, next) => {
    try {
        let barang_id = req.body.barang_id;
        let angka = req.body.angka;
        const [result] = await Stock.tambahStok(angka, barang_id);
        console.log(barang_id);

        successResponse(res, "jumlah stok berhasil ditambah",result[0]);
    } catch (error) {
        next(error);
    }
}