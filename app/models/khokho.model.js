const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const khokhoModel = new Schema({
    title: String,
    teamAScore: String,
    teamASet: String,
    teamBScore: String,
    teamBSet: String,
    matchStatus: String,
    winners: String,
    teamAName: String,
    teamBName: String,
}, { timestamps: true });

const KhoKho = mongoose.model("KhoKho", khokhoModel);

module.exports = KhoKho;
