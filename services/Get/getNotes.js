const data = require("../../repositories/data");
function getNotes(req, res) {
  res.send(data);
}
module.exports = getNotes;
