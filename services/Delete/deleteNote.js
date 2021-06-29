let data = require("../../repositories/data");

function deleteNote(req, res, next) {
       let { id } = req.params;
        
        let deleted = data.find((el) => el.id == id);
        if (deleted) {
          data = data.filter((el) => el.id != id);
        } else {
          res.status(400).json({ message: "Dont exist" });
        }
        res.send(data);
}
module.exports = deleteNote;
