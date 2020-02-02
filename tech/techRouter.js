const express = require("express");

const Tech = require("./tech-model");

const router = express.Router();
// should work for renter to see a list of all the tech ✅
router.get("/", (req, res) => {
  Tech.find()
    .then(tech => {
      res.json(tech);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Failed to get tech item problem with backend" });
    });
});
// this adds a new tech item  for a owner ✅
router.post("/", (req, res) => {
  const techdata = req.body;

  Tech.add(techdata)
    .then(tech => {
      res.status(201).json(tech);
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to create new tech item  problem with backend"
      });
    });
});

// make a Get request for a owner to get a list of just their tech items ✅
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Tech.findTechForOwner(id)
    .then(item => {
      if (item.length) {
        res.json(item);
      } else {
        res.status(404).json({
          message: "Could not find the Tech"
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get tech" });
    });
});
//Put request to be able to update a owners tech ✅

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Tech.findById(id)
    .then(tech => {
      if (tech) {
        Tech.update(changes, id).then(updatedTech => {
          res.json(updatedTech);
        });
      } else {
        res.status(404).json({ message: "Could not find tech with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update tech" });
    });
});
// Delete request to delte a tech item ✅
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Tech.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find the tech item with the given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete tech item" });
    });
});

module.exports = router;
