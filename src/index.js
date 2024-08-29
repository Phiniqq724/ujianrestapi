// Import disini
const express = require('express')
const cors = require('cors')
const first = require("./routes/firstRoutes")

// Deklarasi Function
const app = express()
app.use(cors())
app.use(express.json())

// Deklarasi port
const port = 4000

// Start code disini :D
app.use("/first", first)

app.listen(port, () => {
    console.log(`Server run on http://localhost:${port}`);
})