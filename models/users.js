
const mongoose = require("mongoose");




const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobileNumber: String,
    isActive: Boolean,
});


module.exports = mongoose.model("users",UsersSchema);
