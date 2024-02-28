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
  res.send("am very sorrng story made up not funny at all");
});
// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!

app.listen(80, () => console.log("Server running on port 3000"));
