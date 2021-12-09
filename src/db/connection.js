require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URI);

sequelize.authenticate(); //This is for test if it's working "node .\src\db\connection.js"

module.exports = sequelize;
