const express = require("express");
const app = express();
var router = express.Router();

const getNote=require('../services/Get/getNote')
const getNotes=require('../services/Get/getNotes');
const getStats=require('../services/Get/getStats');
const addNote=require('../services/Post/addNote');
const deleteNote=require('../services/Delete/deleteNote');
const editNote=require('../services/Patch/editNote');

router.get("/stats", getStats);
router.get("/:id",getNote);
router.get("", getNotes);
router.post("/",addNote);
router.delete("/:id", deleteNote);
router.patch("/:id", editNote);

module.exports = router;
