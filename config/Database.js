import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("note-app", "root", "4zh4r_f1k", {
  host: '34.34.218.102',
  port: 3306,
  dialect: 'mysql'
});

export default db;
