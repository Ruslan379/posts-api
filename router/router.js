const express = require("express");

const router = express.Router();

// router.get("/", (req, res, next) => {
//     console.log("router.get");
//     next();
// })

router.get("/", (req, res, next) => {
    res.end("Hello, GET-Router!")
    // console.log("router.get");
    // next();
})

router.post("/post", (req, res, next) => {
    res.end("Hello, POST-Router!")
    next();
})

module.exports = {
    router
}