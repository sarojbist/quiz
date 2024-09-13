import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Score from './score'; // Ensure the file name matches

const Quiz = () => {
  const { category } = useParams(); // Get category from URL parameters
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null); // Track user's score after submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  const optionLabels = ['A', 'B', 'C', 'D'];

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        //old url: http://localhost:8000/category/${category}
        const response = await axios.get(`https://quiz-backend-5a0c.onrender.com/category/${category}`);
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [category]);

  function handleAnswerSelect(questionIndex, selectedOption) {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: selectedOption,
    });
  }

  // UseEffect to track selected answers
  useEffect(() => {
    console.log('Selected answers:', selectedAnswers);
  }, [selectedAnswers]);

  // Calculate score based on selected answers and correct answers
  function calculateScore() {
    let score = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct_answer) {
        score += 1; // Increment score for correct answers
      }
    });
    return score;
  }
  // I want to send userid and isCorrect only in this function
  function sendtoBackend() {

    const resultData = questions.map((question, index) => {
      return {
        questionId: question._id,
        isCorrect: selectedAnswers[index] === question.correct_answer, // Check if selected answer is correct
      };
    });
    // old url: http://localhost:8000/submit-result
    axios.post('https://quiz-backend-5a0c.onrender.com/submit-result', resultData)
      .then(response => {
        console.log('Success:', response.data); // Handle the response from the backend
      })
      .catch(error => {
        console.error('Error:', error); // Handle any errors
      });
  }
  function handleSubmit() {
    const finalScore = calculateScore();
    setScore(finalScore); // Set the score
    setIsSubmitted(true); // Mark quiz as submitted
    sendtoBackend();
  }

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz for {category.replace(/-/g, ' ')}</h1>
      {questions.length === 0 ? (
        <p>No questions available for this category.</p>
      ) : isSubmitted ? (
        <Score score={score} totalQuestions={questions.length} />
      ) : (
        <>
          {questions.map((question, index) => (
            <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg">
              <p className="mb-2 text-base md:text-lg font-semibold">{question.description}</p>
              <ul className="pl-2 md:pl-5">
                {question.options.map((option, i) => (
                  <div
                    className={`flex items-center space-x-2 p-3 rounded-lg border border-gray-300 mb-2 cursor-pointer 
                      ${selectedAnswers[index] === option ? 'bg-blue-200' : 'bg-gray-100'}`}
                    key={option}
                    onClick={() => handleAnswerSelect(index, option)}
                  >
                    <span>{optionLabels[i]}</span>
                    <li>{option}</li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit Quiz
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
