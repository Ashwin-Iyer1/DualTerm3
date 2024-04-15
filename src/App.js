import './App.css';
import Quiz from 'react-quiz-component';
import Dorian1 from './Images/Dorian1.png';
import Dorian2 from './Images/Dorian2.png';
import Dorian3 from './Images/Dorian3.png';
import Dorian4 from './Images/Dorian4.png';
import Dorian5 from './Images/Dorian5.png';
export const quiz =  {
  "quizTitle": "Dorian Gray Quiz",
  "quizSynopsis": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
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
      "point": "20"
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
      "point": "20"
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
      "point": "10"
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
      "point": "30"
    },
    {
      "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      "questionType": "photo",
      "answerSelectionType": "single",
      "answers": [
        "https://dummyimage.com/600x400/000/fff&text=A",
        "https://dummyimage.com/600x400/000/fff&text=B",
        "https://dummyimage.com/600x400/000/fff&text=C",
        "https://dummyimage.com/600x400/000/fff&text=D"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "20"
    },
    {
      "question": "What are the advantages of React JS?",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "React can be used on client and as well as server side too",
        "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
        "React components have lifecycle events that fall into State/Property Updates",
        "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"
      ],
      "correctAnswer": [1, 2, 4],
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "20"
    },
  ]
} 
var wrongs = 0;
const handleQuestionSubmit = (question) => {
  var dorian = document.getElementById('image');
  var imageList = [Dorian1, Dorian2, Dorian3, Dorian4, Dorian5]
  
  console.log(question['isCorrect']);
  if (!question['isCorrect']) {
      wrongs = wrongs + 1;
  }
  dorian.src = imageList[wrongs];
  console.log(wrongs);
};
const showbutton = () => {
  var button = document.getElementById('button');
  button.style.visibility = 'visible';
}
const refreshPage = () => {
  window.location.reload();
}
function App() {
  return (
    <div className="App">
      <Quiz id='quiz' quiz={quiz} showDefaultResult={true} onQuestionSubmit={handleQuestionSubmit} onComplete={showbutton}/>
      <button id='button' onClick={refreshPage}>Play Again</button>
      <img id='image' src={Dorian1}/>
    </div>
    
  );
}

export default App;
