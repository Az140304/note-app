import express from "express";
import {    getNotes, 
            createNote,
            updateNote, 
            deleteNote,
        } from "../controllers/NoteController.js";

const router = express.Router();

router.get("/notes", getNotes);
router.post("/add-notes", createNote);
router.put("/edit-notes/:id", updateNote);
router.delete("/delete-notes/:id", deleteNote);
export default router;
