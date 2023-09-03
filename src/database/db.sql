CREATE DATABASE uk_9;
-- DROP DATABASE batch_9;
USE uk_9;


CREATE TABLE users (
    
    user_id int auto_increment,
    name varchar(100),
    email varchar(100),
    password varchar(255),
    created_at datetime,
    updated_at datetime,
    constraint user_pk
        primary key(user_id)
)

CREATE TABLE stok_barang (
    barang_id int auto_increment,
    user_id int,
    nama_barang varchar(100),
    deskripsi varchar(100),
    harga float,
    jumlah integer,
    created_at datetime,
    updated_at datetime,
    constraint barang_pk
        primary key(barang_id)
);
