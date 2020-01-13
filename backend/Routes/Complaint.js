const express = require("express");
const router = express.Router();
const Complaint = require("../models/complaintSchema");

router.get("/", (req, res) => {
  Complaint.find()
    .then(complaints => res.status(200).json(complaints))
    .catch(err => res.status(400).json(err));
});
router.get("/:id", (req, res) => {
  Complaint.findById(req.params.id)
    .then(complaint => res.json(complaint))
    .catch(err => {
      res.status(400).json(err);
    });
});
router.post("/add", (req, res) => {
  const title = req.body.title;
  const body = req.body.body;
  const flag = req.body.flag;
  const department = req.body.department;

  const newComplaint = new Complaint({
    title,
    body,
    flag,
    department
  });
  newComplaint
    .save()
    .then(() => res.json("Complaint posted"))
    .catch(err => res.status(400).json(err));
});

router.put("/update/:id", (req, res) => {
  Complaint.findByIdAndUpdate(req.params.id).then(complaint => {
    complaint.title = req.body.title;
    complaint.body = req.body.body;
    complaint.flag = req.body.flag;
    complaint.department = req.body.department;

    complaint
      .save()
      .then(() => res.json("Complaint Updated"))
      .catch(err => res.status(400).json(err));
  });
});
router.delete("/delete/:id", (req, res) => {
  Complaint.findByIdAndDelete(req.params.id)
    .then(() => res.json("Complaint Deleted"))
    .catch(err => res.status(400).json(err));
});
module.exports = router;
