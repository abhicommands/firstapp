const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;

//Database connection
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

//middleware

app.use(cors());// allow cross-origin requests for oauth2.0

app.use(express.json()); // parse json bodies

//routes


//start server
app.listen(port, () => {
  console.log(`Server working at port ${port}`);
});
