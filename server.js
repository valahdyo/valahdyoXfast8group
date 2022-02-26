const express = require("express")
const router = require("./src/routes")
const cors = require("cors")

const app = express()
require("dotenv").config()

app.use(express.json())
app.use(cors())

//base url {url}/api
app.use("/api", router)
app.use("/uploads", express.static("uploads"))

port = process.env.PORT || 5000
app.listen(port, () => {
  console.log("Server has started in port " + port)
})
