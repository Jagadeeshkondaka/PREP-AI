const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authroutes"));
app.use("/api/resume", require("./routes/resumeroutes"));
app.use("/api/interview", require("./routes/interviewroutes"));
app.use("/api/resources",require("./routes/resourceroute"))

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on 5000"));