const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
