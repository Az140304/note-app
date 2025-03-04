import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Membuat tabel "user"
const Note = db.define(
  "users", // Nama Tabel
  {
    title: Sequelize.STRING,
  },{
    timestamps: false
}
);

db.sync().then(() => console.log("Database synced"));

export default Note;
