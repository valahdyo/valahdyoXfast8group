const express = require("express")
const router = require("./src/routes")
const cors = require("cors")

const app = express()
require("dotenv").config()

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  )

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true)

  // Pass to next layer of middleware
  next()
})
app.use(express.json())

//base url {url}/api
app.use("/api", router)
app.use("/uploads", express.static("uploads"))

port = process.env.PORT || 5000
app.listen(port, () => {
  console.log("Server has started in port " + port)
})
