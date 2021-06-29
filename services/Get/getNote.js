const Stats = require("../../helpers/stats");
const data = require("../../repositories/data");

function getNote(req, res, next) {
  let id = req.params.id;
  let noteIsExist = data.find((el) => el.id == id);
  let note = {};
  noteIsExist?data.forEach((el) => {
    if (el.id == id) {
      note = el;
    }
  }):res.status(400).json({ message: "Dont exist" });
  res.send(note);
}
module.exports = getNote;
