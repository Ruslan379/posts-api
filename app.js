const express = require("express");
const {router} = require("./router/router");
const app = express();

//! Middleware - Парсер JSON
app.use(express.json());

//! Middleware
// app.use("/", (req, res, next) => {
//     console.log("Hello, Middleware-1");
//     next()
// });

// app.use("/", (req, res, next) => {
// 	console.log("Hello, Middleware-2");
// 	next();
// });

//!!!!! ===== ГЛАВНЫЙ ОБРАБОТЧИК ВСЕХ ЗАПРОСОВ  =====
app.use("/", router);

module.exports = {
	app,
};
