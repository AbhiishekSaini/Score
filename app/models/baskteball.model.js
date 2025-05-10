const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const basketBallSchema = new Schema({
    title: String,
    teamAScore: String,
    teamBScore: String,
    period: String,
    teamAName: String,
    teamBName: String,
    matchStatus: String,
    winner: String,
}, { timestamps: true });

const BasketBall = mongoose.model("BasketBall", basketBallSchema);

module.exports = BasketBall;
