require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require('./src/db/index');
const fetchQstns = require("./src/db/getQuestions");
const Question = require("./src/models/qstns.model");

const port = process.env.PORT || 4000; //server will run on this port

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))
app.use(express.json());
app.use(express.urlencoded())

connectDB()
fetchQstns()


// topics our API has
const validTopics = ["memory-management", "process-scheduling", "file-systems"];

// Handle GET request for a specific category
app.get('/category/:category', async (req, res) => {
  const category = req.params.category;

  // Validate the category
  if (!validTopics.includes(category)) {
    return res.status(400).json({ error: "Invalid category" });
  }
  try {
    const questions = await fetchQstns();

    // Filter questions by the valid category
    const filteredQuestions = questions
      .filter((q) => q.topic === category) // Filter by category
      .sort((a, b) => {
        // Prioritize questions with attempts === 0 or correct === 0
        if (a.attempts === 0 || a.correct === 0) return -1;
        if (b.attempts === 0 || b.correct === 0) return 1;

        // Sort by correct/attempts ratio (higher ratio comes later)
        const ratioA = a.correct / a.attempts;
        const ratioB = b.correct / b.attempts;
        return ratioA - ratioB; // Sort in ascending order
      })
      .slice(0, 5); // Limit the number of questions to 5

    // Return the limited filtered questions
    res.json(filteredQuestions);
  }

  catch (error) {
    // Handle errors
    console.error("Error fetching questions:", error.message);
    res.status(500).json({ error: "Failed to fetch questions" });
  }

});

// Handle POST request to /submit-result
app.post('/submit-result', async (req, res) => {
  try {
    const results = req.body; // Array of objects { questionId, isCorrect }

    // Use for...of loop and `await` to process each result
    for (const result of results) {
      const { questionId, isCorrect } = result;

      await Question.findByIdAndUpdate(
        questionId, // ID of the document to update
        {
          $inc: {
            attempts: 1, // Increment attempts field by 1
            ...(isCorrect && { correct: 1 }) // Increment correct field by 1 if isCorrect is true
          }
        }
      );
    }

    res.status(200).json({ message: 'Results updated successfully' });
  } catch (error) {
    console.error('Error handling POST request:', error);
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
});



app.listen(port, () => {
  console.log("App is running on ", "localhost:" + port);
})