import db  from "../connection/db.js";

export const createUser = (name, email, password) =>{
    let created_at = new Date();
    const sql = "INSERT INTO users(name, email, password, created_at) VALUE (?, ?, ?, ?)";
    const values = [name, email, password, created_at];

    return db.query(sql, values);
}

export const getUser = (limit) => {
    const sql = "SELECT user_id, name, email, password, created_at, updated_at FROM users LIMIT ?";
    const values = [limit];
    
    return db.query(sql, values);
}

export const checkEmailUser = (email) => {
    const sql = "SELECT user_id, name, email, password, created_at, updated_at FROM users WHERE email = ?";
    const values = [email];
    
    return db.query(sql, values);
}

export const updateUser = (name, email, password,user_id) => {
    let updated_at = new Date();
    const sql  = "UPDATE users SET name =? , email = ?, password = ?, updated_at = ? WHERE user_id = ?";
    const values = [name, email, password, updated_at,user_id];

    return db.query(sql, values);
} 


export const deleteUser = (user_id) => {
    const sql = "DELETE FROM users WHERE user_id = ?";
    const values = [user_id];

    return db.query(sql, values);
}

export const getById = (user_id) => {
    const sql = "SELECT * FROM users WHERE user_id = ?";
    const values = [user_id];

    return db.query(sql, values)
}