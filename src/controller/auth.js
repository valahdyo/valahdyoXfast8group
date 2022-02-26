const { user } = require("../../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.login = async (req, res) => {
  const { email, password } = req.body
  try {
    let data = await user.findOne({
      where: { email },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    })
    const isValid = await bcrypt.compare(password, data.password)
    if (!isValid) {
      return res.status(400).send({
        status: "Failed",
        message: "User or password is doesn't match",
      })
    }
    //Generate JWT Token when login success
    const accessToken = jwt.sign(
      { id: data.id, role: data.role },
      process.env.SECRET_TOKEN,
      {
        expiresIn: 86400,
      }
    )
    res.status(200).send({
      msg: "success",
      user: { email, fullName: data.fullName },
      accessToken,
    })
  } catch (error) {
    console.log(error)
    res.status(400).send({
      status: "Failed",
      message: "User or password is doesn't match",
    })
  }
}
