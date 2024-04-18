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
      "question": "Who did Dorian Gray kill first, thus putting him past the point of no return?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Lord Henry",
        "Basil",
        "Sibyl Vane",
        "He didn’t kill anyone"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Basil was killed by Dorian in a fit of rage after Basil confronted Dorian about his actions.",
      "point": "25"
    },
    {
      "question": "What color was the book that Lord Henry gave to Dorian?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Black",
        "Red",
        "Yellow",
        "What book?"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "The book that Lord Henry gave to Dorian was yellow. The book was a gift from Lord Henry to Dorian.",
      "point": "25"
    },
    {
      "question": "Where did Dorian Gray stash the painting once it started to transform?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Left it where it was",
        "He destroyed it",
        "His bedroom",
        "The attic"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Dorian Gray stashed the painting in his attic once it started to transform. He was afraid that someone would see it and find out about his secret.",
      "point": "25"
    },
    {
      "question": "What was Dorian Gray’s first act of “sin”? ",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Kissing Basil",
        "Sleeping with Sibyl",
        "A cigarette",
        "Swearing at a party"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Dorian Gray’s first act of sin was sleeping with Sibyl Vane. This act was the beginning of his downward spiral.",
      "point": "25"
    }
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
