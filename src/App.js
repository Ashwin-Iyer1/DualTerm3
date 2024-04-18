import './App.css';
import React, { useState } from 'react';
import Quiz from 'react-quiz-component';
import Dorian1 from './Images/Dorian1.png';
import Dorian2 from './Images/Dorian2.png';
import Dorian3 from './Images/Dorian3.png';
import Dorian4 from './Images/Dorian4.png';
import Dorian5 from './Images/Dorian5.png';

export const quiz =  {
  "quizTitle": "Dorian Gray Quiz",
  "quizSynopsis": "A quiz on the book 𝘛𝘩𝘦 𝘗𝘪𝘤𝘵𝘶𝘳𝘦 𝘰𝘧 𝘋𝘰𝘳𝘪𝘢𝘯 𝘎𝘳𝘢𝘺 by Oscar Wilde. Made by Cameron Chin, Bailey Frazier, Jonathan Heidebrecht, Ashwin Iyer, and Catalina Lanuza",
  "nrOfQuestions": "4",
  "questions": [
    {
      "question": "How can you access the state of a component from inside of a member function?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "25"
    },
    {
      "question": "ReactJS is developed by _____?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Google Engineers",
        "Facebook Engineers"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "25"
    },
    {
      "question": "ReactJS is an MVC based framework?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "True",
        "False"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "25"
    },
    {
      "question": "Which of the following concepts is/are key to ReactJS?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Component-oriented design",
        "Event delegation model",
        "Both of the above",
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "25"
    },
    {
      "question": "Which of the following concepts is/are key to ReactJS?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Test1",
        "Test1",
        "Test1",
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "25"
    },
  ]
} 

function App() {
  var imageList = [Dorian1, Dorian2, Dorian3, Dorian4, Dorian5]
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State 
  const [isFadingOut, setIsFadingOut] = useState(false); // 
  const handleQuestionSubmit = (question) => {
    if (!question['isCorrect']) {
      setIsFadingOut(true); // Trigger fading out effect
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => prevIndex + 1); // Move to the next image index
        setIsFadingOut(false); // Reset fading out state
      }, 300); // Wait for the fade-out transition to complete (adjust timing as needed)
    }
  };
  const showButton = () => {
    var button = document.getElementById('button');
    button.style.visibility = 'visible';
  }
  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <Quiz id='quiz' quiz={quiz} showDefaultResult={true} onQuestionSubmit={handleQuestionSubmit} onComplete={showButton}/>
      <button id='button' onClick={refreshPage}>Play Again</button>
      <img
        id='image'
        src={imageList[currentImageIndex]}
        className={isFadingOut ? 'fade-out' : ''} // Apply fade-out class when fading out
        alt={`Dorian ${currentImageIndex + 1}`}
      />
    </div>
  );
}

export default App;
