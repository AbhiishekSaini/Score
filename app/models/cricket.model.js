const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cricketModel = new Schema({
    title: String,
    teamARuns: String,
    teamAWickets: String,
    teamAOvers: String,
    teamBRuns: String,
    teamBWickets: String,
    teamBOvers: String,  
    matchStatus: String,
    teamAName: String,
    teamBName: String,
    winner: String,
}, { timestamps: true });

const Cricket = mongoose.model("Cricket", cricketModel);

module.exports = Cricket;
