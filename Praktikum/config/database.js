// import mysql
const mysql = require("mysql");

// import dotenv dan menjalankan method config
require("dotenv").config();

// destructing object process.env
const { DB__HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

/**
 * Membuat koneksi database menggunakan method createConnection
 * Method menerima parameter object: host, user, password, database
 */
const db = mysql.createConnection({
    host: DB_HOST,
    user: CB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});

/**
 * Menghubungkan ke database menggunakan method connect
 * Menerima parameter callback
 */
db.connect((err) => {
    if (err) {
        console.log("Error connecting" + err.stack);
        return;
    } else {
        console.log("Connnected to database");
        return;
    }
});

module.export = db;