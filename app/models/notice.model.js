const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noticeModel = new Schema({
    title: String,
    body: String,
    status: String,
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const KhoKho = mongoose.model("Notice", noticeModel);

module.exports = KhoKho;
