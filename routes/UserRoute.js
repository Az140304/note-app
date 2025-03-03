import express from "express";
import {    getUsers, 
            createUser,
            updateUser, 
            deleteUser
        } from "../controllers/UserController.js";

const router = express.Router();

router.get("/test", getUsers);
router.post("/add-users", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
export default router;
