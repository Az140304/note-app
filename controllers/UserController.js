import User from "../models/UserModel.js";



// GET
async function getUsers(req, res) {
  try {
    //const response = 
    await User.findAll().then(players => {
      res.render("home", {data: players})
    });
    //res.status(200).json(response);
    
  } catch (error) {
    console.log(error.message);
  }
}

// CREATE
const createUser  = async (req, res) => {
  try {
    const inputResult = req.body; // Get data from the request body
    await User.create(inputResult); // Insert data into the database
    res.status(201).json({ msg: "User  Created" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Error creating user" });
  }
};



const updateUser = async(req, res) => {
  try {
    await User.update(req.body, {
      where:{
        id: req.params.id
      }
    });
    res.status(200).json({msg: "User Updated"});
  } catch (error) {
    console.log(error.message);
  }
}

const deleteUser = async(req, res) => {
  try {
    await User.destroy(req.body, {
      where:{
        id: req.params.id
      }
    });
    res.status(200).json({msg: "User Deleted"});
  } catch (error) {
    console.log(error.message);
  }
}

export { getUsers, createUser, updateUser, deleteUser};