const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kabaddiModel = new Schema({
    title: String,
    teamAScore: String,
    teamASet: String,
    teamBScore: String,
    teamAName: String,
    teamBName: String,
    teamBSet: String,
    matchStatus: String,
    winner: String,
}, { timestamps: true });

const Kabaddi = mongoose.model("Kabaddi", kabaddiModel);

module.exports = Kabaddi;
