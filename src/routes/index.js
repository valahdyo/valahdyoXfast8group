const router = require("express").Router()

//import middlewares
const { authJwt } = require("../middlewares/authJwt")
const { uploadFile } = require("../middlewares/uploadFile")

//import controller
const { login } = require("../controller/auth")

const {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/product")

//test home url
router.get("/", async (req, res) => {
  res.send("Hello world !")
})

//auth router
router.post("/auth/login", login)

//product router
router.post("/products", authJwt, uploadFile("image"), addProduct)
router.get("/products", getProducts)
router.patch("/products/:id", authJwt, uploadFile("image"), updateProduct)
router.delete("/products/:id", authJwt, deleteProduct)

module.exports = router
