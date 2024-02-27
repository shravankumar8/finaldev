const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.send(
    "In a quaint village, there lived a kind-hearted blacksmith named Aiden. One day, a mysterious traveler gifted him a small, silver key. Intrigued, Aiden discovered that the key unlked a hidden door in his workshop. Behind it lay a room filled with forgotten dreams, waiting to be forged into reality. Inspired, Aiden spent his days bringing those dreams to life, turning his humble village into a haven of magic and possibility."
  );
});
// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!

app.listen(3000, () => console.log("Server running on port 3000"));
