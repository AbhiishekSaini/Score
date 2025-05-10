const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// generate a normal user schema in mongoos
const userModel = new Schema({
    username: {
        type: String,
        required: false,
        unique: true,
    },
    email: {
        type: String,
        required: false,
        unique: true,
    },
    password: {
        type: String,
        required: false,
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    mobileNumber: {
        type: String,
        required: false,
        unique: true,
    },
    mobileVerified: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const User = mongoose.model("users", userModel);

module.exports = User;