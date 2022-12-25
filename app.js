const express = require("express");
const app = express();

//! Middleware - Парсер JSON
app.use(express.json());

//!!!!! ===== ГЛАВНЫЙ ОБРАБОТЧИК ВСЕХ ЗАПРОСОВ  ===== 
app.use("/", (req, res, next) => {
    console.log("Hello, Middleware-1");
    next()
});

app.use("/", (req, res, next) => {
    console.log("Hello, Middleware-2");
    next()
});


module.exports = {
    app
};