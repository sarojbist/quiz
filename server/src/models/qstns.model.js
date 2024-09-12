// models/Question.js
const mongoose = require('mongoose');

// Define the schema
const questionSchema = new mongoose.Schema({
  description: String,
  options: [String],
  correct_answer: String,
  topic: String,
  attempts: { type: Number, default: 0 },
  correct: { type: Number, default: 0 }
});

// Create a model
const Question = mongoose.model('qstns', questionSchema);

module.exports = Question;
