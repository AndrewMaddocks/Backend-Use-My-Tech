const express = require("express");

const User = require("./user-model");

const router = express.Router();
router.get("/", (req, res) => {
  User.find()
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Failed to get user problem with backend" });
    });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "Could not find user with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get user" });
    });
});
module.exports = router;
