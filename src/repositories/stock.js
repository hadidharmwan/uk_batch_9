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

// export const checkEmailUser = (email) => {
//     const sql = "SELECT user_id, name, email, password, created_at, updated_at FROM users WHERE email = ?";
//     const values = [email];
    
//     return db.query(sql, values);
// }

export const updateStock = (nama_barang, deskripsi, harga,jumlah,barang_id) => {
    let updated_at = new Date();
    const sql  = "UPDATE stok_barang SET nama_barang = ? , deskripsi = ?, harga = ?, jumlah = ?, updated_at = ? WHERE barang_id = ?";
    const values = [nama_barang, deskripsi, harga, jumlah, updated_at, barang_id];

    return db.query(sql, values);
} 


export const deleteStock = (barang_id) => {
    const sql = "DELETE FROM users WHERE barang_id = ?";
    const values = [barang_id];

    return db.query(sql, values);
}