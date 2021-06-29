let data = require("../../repositories/data");
const isValidDate=require('../../helpers/dateValidator');

function editNote(req, res) {
  let { id } = req.params;
  let idExist=data.find((el) => el.id == id);
  if(!idExist){
    res.status(400).json({ message: "bad id" });
  }
  let { date } = req.body;
  if (!isValidDate(date)) {
    res.status(400).json({ message: "Bad Date" });
  }
  data.forEach((el) => {
    if (el.id == id) {
      el.planDate = date;
    }
  });
}
module.exports = editNote;

