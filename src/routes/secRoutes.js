const express = require('express')
const app = express()

app.use(express.json());

// Start Code Here
const sec = require("../controllers/secController")

app.post("/minmax", sec.arrayBilangan)

module.exports = app