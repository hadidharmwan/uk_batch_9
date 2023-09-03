import mysql from "mysql2/promise";

const database = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "uk_9"
});

export default database;