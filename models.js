const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  birthday: Date,
  bio: { type: String, required: true },
  profilePic: { type: String, required: true },
  headerPic: { type: String, required: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  directMessages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  followers: [
    { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  ],
  following: [
    { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  ],
  allowDirectMessages: { type: Boolean, required: true },
  darkMode: { type: Boolean, required: true },
  emailNotifications: { type: Boolean, required: true },
  privateAccount: { type: Boolean, required: true },
});

let postSchema = mongoose.Schema({
  author: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  media: [
    {
      type: { type: String, enum: ["image", "video"] },
      url: { type: String, required: true },
    },
  ],
  content: { type: String, required: true },
});

let messageSchema = mongoose.Schema({
  sentUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  receivedUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: { type: String, required: true },
});

let User = mongoose.model("User", userSchema);
let Post = mongoose.model("Post", postSchema);
let Message = mongoose.model("Message", messageSchema);

module.exports.User = User;
module.exports.Post = Post;
module.exports.Message = Message;
