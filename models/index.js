const Sequelize = require('sequelize');

const sequelize = new Sequelize('blog_db', 'root', 'password1234', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
