const express = require('express')
const app = express()

app.use(express.json());

// Start Code Here
const first = require("../controllers/firstController")

app.get("/genjil/:number", first.bilangan)

module.exports = app