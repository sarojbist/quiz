const connectDB = require("./index")
const Question = require("../models/qstns.model"); // The Question model

const fetchQuestions = async () => {
  try {
    await connectDB();

    // Fetch all questions from the 'qstns' collection
    const questions = await Question.find({});
    // Return or process the questions
    return questions;
  } catch (error) {
    console.error('Error fetching questions:', error.message);
  }
};

// Call the function to fetch and use the questions
module.exports = fetchQuestions;
