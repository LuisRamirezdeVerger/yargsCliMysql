const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

//Creating the schema
const Movie = sequelize.define("Movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  actor: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  genre: {
    type: DataTypes.STRING,
  },
});

//Another Schema
const Actor = sequelize.define("Actor", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.STRING,
  },
  jobs: {
    type: DataTypes.STRING,
  },
});
module.exports = Movie;
