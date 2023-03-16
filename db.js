const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.DBCLUSTER, {
  useNewUrlParser: true,
  useUniFiedTopology: true,
  family: 4,
});

module.exports = mongoose.connection;
