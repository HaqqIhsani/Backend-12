// import express
const express = require("express");

// import router
const router = require("./routes/api.js");

// membuat object express
const app = express();

// menggunakan middlewaare
app.use(express.json());
app.use(express.urlencoded());

// menggunakan routing (router)
    app.use(router);

// mendefinisikan port
app.listen(3000);
