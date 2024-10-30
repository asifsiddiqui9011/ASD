const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update the updated_at field on document update
playerSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
