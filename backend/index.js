const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const {MONGODB_CONNECTION_STRING, JWT_SECRET} = require("./config/keys.js")
require("dotenv").config();

// set up express
const app = express();

app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("front/build"))
  const path = require("path")
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front", "build", "index.html"))
  })
} 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));


// set up mongooses
mongoose.connect(MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
	if (err) throw err;
    console.log("MongoDB connection Established!");
});

// set up routes
app.use("/users", require("./routes/userRouter"));