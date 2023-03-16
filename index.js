const express = require("express");
const conn = require("./db");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 1996;

app.use(express.json());
app.use(cors());

//------------------------------db connection---------

conn.on("connected", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MongoDB Connected");
  }
});

//----------------Routes (API)---------------------------------------------------------------

//routes(middleware)

app.use("/users", require("./routes/users"));

//-------------------server code------------------------

app.listen(PORT, () => {
  console.log("server is started on port : " + PORT);
});

//home path =>
app.get("/", (req, res) => {
  res.send("<h1>hello you are using node api </h1>");
});
