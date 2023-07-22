const express = require("express");

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

app.get("/users", (req, res) => {
  res.send("Returning a list of all users.");
});

app.get("/users/:username", (req, res) => {
  res.send("Returning the specified user");
});

app.post("/users", (req, res) => {
  res.send("Posting new user information");
});

app.post("/users/:username/favorites", (req, res) => {
  res.send("Posting a new post to the user's favorites");
});

app.post("/users/:username", (req, res) => {
  res.send("Posting a new post on the user's page.");
});

app.put("/users/:username", (req, res) => {
  res.send(
    "Posting new profile information - Profile pic, birthday, hometown, bio"
  );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server listening on port:", PORT);
});
