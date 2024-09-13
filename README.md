# Quiz Generation System

About App: This app is small quiz app which gives questions according to the weakness of the users. Suppose a user has attempted the particular question 10 times and he has given correct answer only a twice. So based on the user's weaknees, the app will show this question to the user again.

Live Access: https://quiz-front-ikja.onrender.com/

# Topics covered: 
    - Tracks the number of attempts and correct answers for each question
    - Dynamic Routing
    - Category based quiz questions
    - dynamically changing data

# Technologies Used
    - Frontend: React Js, Tailwind css
    - Backend: Node Js, Express
    - Database: MongoDB

# How I created the Application
I created a database with questions in a format like: 
{
"_id": "66e408925eb24ab535e5daeb",
"description": "What is the purpose of paging in an operating system?",
"options": [
"To reduce process execution time",
"To allocate memory more efficiently",
"To manage I/O operations",
"To handle deadlocks"
],
"correct_answer": "To allocate memory more efficiently",
"topic": "memory-management",
"attempts": 0,
"correct": 0
}

Here, the attempts and correct key plays an important role to showcase questions to the users.

In client side, users have 3 options to select the questions category. Whenever a category is selected, the application fetch the data from api provided by the backend using axios.

When user submit the answers, the result of user is submitted to the backend using post request. Then, backend change the data of the database accordingly.
