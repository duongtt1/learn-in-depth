var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const formatDate = require("../utils/function/formatDate");

var AccountModel = new Schema({
    fullName: {
        type: String,
        // minlength:2,
        required: [true, "Name required"]
    },
    username: {
        type: String,
        unique: true,
        required: [true, "username required"],
    },
    password: {
        type: String,
        required: [true, "password required"]
    },
    gender: {
        type: Number
    },
    addRess: {
        type: String
    },
    dateBirth: {
        type: Date
    },
    phoneNumber: {
        type: String
    },
    parentNumber: {

        type: String
    },
    phoneNumberParent: {
        type: String
    },
    email: {
        type: String
    },
    tokenResetPassword: {
        type: String
    },
    role: {
        type: String
    },
    createDate: {
        type: Object,
        default: formatDate(Date.now()),
    }
}, {
    collection: "Account",
});

module.exports = mongoose.model("Account", AccountModel);