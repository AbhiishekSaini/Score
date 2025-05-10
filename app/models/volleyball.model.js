const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VolleyBallModel = new Schema({
    title: String,
    teamAPoints: String,
    teamASets: String,
    teamBPoints: String,
    teamBSets: String,
    teamAName: String,
    teamBName: String,
    matchStatus: String,
    winner: String,
}, { timestamps: true });

const VolleyBall = mongoose.model("VolleyBall", VolleyBallModel);

module.exports = VolleyBall;
