import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("asisten-tcc-api", "root", "", {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

export default db;
