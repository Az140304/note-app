import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("note-app", "root", "", {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

export default db;
