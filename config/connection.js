const Sequelize = require('sequelize');
module.exports = new Sequelize('codegig_db', 'root', 'root', {
  host: 'localhost',
  port: 8819,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});