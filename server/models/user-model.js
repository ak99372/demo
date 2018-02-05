const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  googleId: String,
  imageUrl: String
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;