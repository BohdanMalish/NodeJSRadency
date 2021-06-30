const data = require("../../repositories/data");
const isValidDate = require("../../helpers/dateValidator");

function addNote(req, res, next) {
  const { id, name, dateCreated, category, context, planDate, archive } =
    req.body;
  const temp = req.body;

  const idExist = data.find((el) => el.id == id);
  if (
    idExist ||
    !typeof name === "string" ||
    !isValidDate(dateCreated) ||
    !isValidDate(planDate) ||
    !typeof context === "string" ||
    !typeof category === "string" ||
    typeof archive != "boolean"
  ) {
    res.status(400).json({ message: "Bad data" });
  } else {
    data.push(temp);
  }
  res.send(data);
}
module.exports = addNote;
