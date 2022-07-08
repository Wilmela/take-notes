const express = require("express");
const Note = require("../models/");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { title, note } = req.body;
    const newNote = new Note({
      title,
      note,
    });
    await newNote.save();

    res.json({ note: newNote });
  } catch (error) {
    res.status(500)
    .send("Sorry, could not add a new note due to some server side issues");
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json({ note: notes })
  } catch (error) {
    res.status(500)
    .send("Sorry, could not find notes due to some server side issues");
  }
});

router.get("/getOne/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);

    res.status(200).json({ note })
  } catch (error) {
    res.status(500)
    .send("Sorry, could not add your note due to some server side issues");
  }
});

router.put('/update/:id', async(req, res)=>{
  try {
    const {id} = req.params;
    const {title, note} = req.body;
  
    const updatedNote = await Note.findByIdAndUpdate(id, {
      $set:{
        title,
        note
      }
    }, {new: true});

    res.json({note: updatedNote});
  } catch (error) {
    console.log(error);
  }

});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndRemove(id);
    res.json({ note: deletedNote });
  } catch (error) {
    res.status(500)
    .send("Sorry, could not delete note due to some server side issues");
  }
});

module.exports = router;
