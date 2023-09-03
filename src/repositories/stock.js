import db  from "../connection/db.js";

export const createStock = (user_id, nama_barang, deskripsi, jumlah, harga) =>{
    let created_at = new Date();
    const sql = "INSERT INTO stok_barang(user_id, nama_barang, deskripsi,  harga, jumlah, created_at) VALUE (?, ?, ?, ?,?,?)";
    const values = [user_id, nama_barang, deskripsi, jumlah, harga, created_at];

    return db.query(sql, values);
}

export const getStock = (limit) => {
    const sql = "SELECT barang_id, user_id, nama_barang, deskripsi, harga, jumlah, created_at, updated_at FROM stok_barang LIMIT ?";
    const values = [limit];
    
    return db.query(sql, values);
}

export const getStockByName = (nama_barang) => {
    const sql = "SELECT  * FROM stok_barang WHERE nama_barang = ?";
    const values = [nama_barang];
    
    return db.query(sql, values);
}

export const updateDataStock = (nama_barang, deskripsi, harga,jumlah,barang_id) => {
    let updated_at = new Date();
    const sql  = "UPDATE stok_barang SET nama_barang = ?, deskripsi = ?, harga = ?, jumlah = ?, updated_at = ? WHERE barang_id = ?";
    const values = [nama_barang, deskripsi, harga, jumlah, updated_at, barang_id];

    return db.query(sql, values);
} 


export const deleteStock = (barang_id) => {
    const sql = "DELETE FROM users WHERE barang_id = ?";
    const values = [barang_id];

    return db.query(sql, values);
}

export const kurangiStok = (angka,barang_id) => {
    const sql = "UPDATE stok_barang SET jumlah = jumlah - ? where barang_id = ?";
    const values = [angka, barang_id];

    return db.query(sql,values);
}

export const tambahStok = (angka, barang_id) => {
    const sql = "UPDATE stok_barang SET jumlah = jumlah + ? where barang_id = ?";
    const values = [angka, barang_id];

    return db.query(sql,values);
}