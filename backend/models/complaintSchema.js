const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const complaintSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },

    body: {
      type: String,
      required: true
    },
    flag: {
      type: Boolean,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    creator: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Complaint", complaintSchema);
