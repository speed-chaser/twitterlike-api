const express = require("express");
const mongoose = require("mongoose");
Models = require("./models.js");

const Users = Models.User;
const Posts = Models.Post;
const Messages = Models.Message;

mongoose.connect("mongodb://127.0.0.1:27017/chasesocial", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/status", (req, res) => {
  const status = {
    Status: "Running",
  };

  res.send(status);
});

app.get("/", (req, res) => {
  res.send("Welcome to my social media.");
  res.send(
    "This will be the landing page prompting login/signup. If logged in will show a feed of posts."
  );
});

//user signup
app.post("/signup", (req, res) => {
  res.send("Posting new user information");
});

//user login
app.post("/login", (req, res) => {
  res.send("login with existing user");
});

//user edit profile
app.put("/users/:userId", (req, res) => {
  res.send(
    "Posting new profile information - Profile pic, birthday, hometown, bio"
  );
});

//user follow / unfollow another user
app.post("/users/:userId/follow", (req, res) => {
  res.send("follow another user");
});

app.delete("/users/:userId/follow", (req, res) => {
  res.send("unfollow another user");
});

//user create a post on their profile
app.post("/posts", (req, res) => {
  res.send("Create a post on your profile.");
});

//user repost another user's post to their profile
app.post("/posts/:postId/repost", (req, res) => {
  res.send("Reposting something on user's page");
});

//user add / remove post from their favorites list
app.post("/posts/:postId/favorite", (req, res) => {
  res.send("Added post to favorites list.");
});

app.delete("/posts/:postId/favorite", (req, res) => {
  res.send("Deleted post to favorites list.");
});

//user send / receive private messages to and from other users
app.post("/messages", (req, res) => {
  res.send("send a new private message to another user");
});

app.get("/messages/:messageId", (req, res) => {
  res.send("retrieve a specific private message");
});

app.get("/messages", (req, res) => {
  res.send("retrieve the list of private messages for the current user");
});

//read other users' posts
app.get("/users/:userId/posts", (req, res) => {
  res.send("retrieve all posts from a specific user");
});

//respond to posts with a post of your own in the same thread
app.post("/posts/:postId/reply", (req, res) => {
  res.send("post a reply to an existing post (creating a thread)");
});

//discover new users
app.get("/users/discover", (req, res) => {
  res.send("retrieve a list of new or recommended users to follow");
});

//explore trending topics / hashtags
app.get("/posts/trending", (req, res) => {
  res.send("retrieve a list of trending posts or hashtags");
});

//return a list of all users
app.get("/users", (req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//returning specific user
app.get("/users/:username", async (req, res) => {
  res.send("Returning the specified user");
});

//retrieves specific users posts
app.get("/users/:username/posts", (req, res) => {
  res.send("Returning specific user's posts");
});

//retrieves specific users favorite posts
app.get("/users/:username/favorites", (req, res) => {
  res.send("Returns specific user's favorite posts");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server listening on port:", PORT);
});
