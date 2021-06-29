const data = require("../repositories/data");
const calculate_stats=()=>{
  const Task=calculate('Task');
  const Random=calculate('Random');
  const Idea=calculate('Idea');
  return{
      'Task':Task,
      'Random':Random,
      'Idea':Idea,
  }
}

 const calculate = (category) => {
    let res = [];
    let countArch = 0;
    let countNotes = 0;
    data.forEach((el) => {
    if (el.category === category) {
        el.archive ? countArch++ : countNotes++;
        }
      });
      
      return {'countNotes':countNotes,
        'countArch':countArch,
    };
    };

let Stats=calculate_stats();

module.exports=Stats;