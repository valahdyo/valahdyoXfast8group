const express = require("express")
const app = express()
const router = require("./src/routes")
app.use(express.json())

//base url {url}/api
app.use("/api", router)

port = process.env.PORT || 5000
app.listen(port, () => {
  console.log("Server has started in port " + port)
})
