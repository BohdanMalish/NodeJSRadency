let data = require("../../repositories/data");
const isValidDate = require("../../helpers/dateValidator");

function editNote(req, res) {
  const { id } = req.params;
  const idExist = data.find((el) => el.id == id);
  if (!idExist) {
    res.status(400).json({ message: "bad id" });
  }
  const { date } = req.body;
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
