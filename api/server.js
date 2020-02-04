const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/authRouter");
const techRouter = require("../tech/techRouter.js");
const userRouter = require("../user/userRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/user", authRouter);
server.use("/api/tech", techRouter);
server.use("/api/user", userRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;
