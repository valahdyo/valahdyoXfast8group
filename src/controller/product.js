const cloudinary = require("../utils/cloudinary")
const { product } = require("../../models")
const FILE_PATH = process.env.PATH_FILE || "http://localhost:5000/uploads/"

exports.addProduct = async (req, res) => {
  try {
    const result_image = await cloudinary.uploader.upload(req.file.path, {
      folder: "nutech-file",
      use_filename: true,
      unique_filename: false,
    })
    let newProduct = await product.create({
      ...req.body,
      image: result_image.public_id,
    })
    newProduct.image = FILE_PATH + newProduct.image

    res.status(201).send({
      msg: "success",
      id: newProduct.id,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({ msg: "add product error" })
  }
}

exports.getProducts = async (req, res) => {
  try {
    let data = await product.findAll({
      attributes: {
        exclude: ["updatedAt", "createdAt"],
      },
    })
    data = JSON.parse(JSON.stringify(data))
    data = data.map((item) => {
      item.image = FILE_PATH + item.image
      return { ...item }
    })
    res.status(200).send({
      msg: "success",
      data,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({ msg: "get products error" })
  }
}

exports.updateProduct = async (req, res) => {
  try {
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "nutech-file",
        use_filename: true,
        unique_filename: false,
      })

      const toUpdate = await product.findOne({ where: { id: req.params.id } })
      if (toUpdate.image) {
        cloudinary.uploader.destroy(toUpdate.image, function (error, result) {
          console.log(result, error)
        })
      }
      await product.update(
        { ...req.body, image: result.public_id },
        {
          where: { id: req.params.id },
        }
      )
    } else {
      await product.update(
        { ...req.body },
        {
          where: { id: req.params.id },
        }
      )
    }
    res.status(201).send({
      msg: "success",
      id: req.params.id,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({ msg: "update products error" })
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    const toDelete = await product.findOne({ where: { id: req.params.id } })
    if (toDelete.image) {
      cloudinary.uploader.destroy(toDelete.image, function (error, result) {
        console.log(result, error)
      })
    }
    await product.destroy({ where: { id: req.params.id } })

    res.status(200).send({
      msg: "succes",
      id: req.params.id,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({ msg: "delete products error" })
  }
}
