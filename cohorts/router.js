const Cohorts = require("./model.js");

const router = require("express").Router();

router.get("/", (req, res) => {
  Cohorts.find()
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(({ name, message, stack, code }) => {
      console.log(name, message, stack, code);
      res.status(500).json({ name, message, stack, code });
    });
});

router.post("/", (req, res) => {
  let name = req.body;

  Cohorts.add(name)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Unable to post new cohort name" });
    });
});
module.exports = router;
