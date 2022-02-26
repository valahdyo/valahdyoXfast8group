"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      email: DataTypes.STRING,
      fullName: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      modelName: "user",
    }
  )
  return user
}
