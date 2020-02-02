const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authOwnerRouter = require("../auth/authOwnerRouter");
const authRenterRouter = require("../auth/authRenterRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/owner", authOwnerRouter);
server.use("/api/renter", authRenterRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;
