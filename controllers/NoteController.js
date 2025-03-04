import Note from "../models/NoteModel.js";



// GET
async function getNotes(req, res) {
  try {
    const response = await Note.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

// CREATE
const createNote  = async (req, res) => {
  try {
    const inputResult = req.body; 
    await Note.create(inputResult); 
    res.status(201).json({ msg: "Note  Created" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Error creating Note" });
  }
};


// UPDATE
const updateNote = async(req, res) => {
  try {
    await Note.update(req.body, {
      where:{
        id: req.params.id
      }
    });
    res.status(200).json({msg: "Note Updated"});
  } catch (error) {
    console.log(error.message);
  }
}

// DELETE
const deleteNote = async (req, res) => {
  try {
      const { id } = req.params;
      const result = await Note.destroy({
          where: { id: id } // Pastikan ada kondisi where
      });

      if (result) {
          res.json({ message: "Note deleted successfully!" });
      } else {
          res.status(404).json({ error: "Note not found!" });
      }
  } catch (error) {
      console.error("Error deleting Note:", error);
      res.status(500).json({ error: "Internal server error" });
  }
};


export { getNotes, createNote, updateNote, deleteNote};