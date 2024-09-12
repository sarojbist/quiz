require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require('./src/db/index');
const fetchQstns = require("./src/db/getQuestions")

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
app.get('/category/:category', async(req, res) => {
  const category = req.params.category;

  // Validate the category
  if (!validTopics.includes(category)) {
    return res.status(400).json({ error: "Invalid category" });
  }
  try {
    const questions = await fetchQstns();

    // Filter questions by the valid category
    const filteredQuestions = questions.filter((q) => {
      return q.topic === category;
    })
    // Limit the number of questions to 5
    const limitedQuestions = filteredQuestions.slice(0, 5);

    // Return the limited questions
    res.json(limitedQuestions);
  }

  catch (error) {
    // Handle errors
    console.error("Error fetching questions:", error.message);
    res.status(500).json({ error: "Failed to fetch questions" });
  }

});

app.listen(port, () => {
  console.log("App is running on ", "localhost:" + port);
})