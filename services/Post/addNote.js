const data = require("../../repositories/data");
const isValidDate=require('../../helpers/dateValidator');

function isString(a){
if(a===String(a)){
return true;
}
else{
    return false;
}
}

function addNote(req, res, next) {
  var {id,name,dateCreated,category,context,planDate,archive} = req.body;
  var temp=req.body;
  
  let idExist=data.find((el) => el.id == id);
  if(idExist||!isString(name)||!isValidDate(dateCreated)||!isValidDate(planDate)||!isString(context)||!isString(category)||typeof(archive)!="boolean"){
    res.status(400).json({ message: "Bad data" });
  }
  else{
  data.push(temp);
  }
  res.send(data);
}
module.exports = addNote;


