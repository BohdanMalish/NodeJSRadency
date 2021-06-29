const Stats = require("../../helpers/stats");

function getStats(req, res, next) {
  res.send(Stats);
}
module.exports = getStats;