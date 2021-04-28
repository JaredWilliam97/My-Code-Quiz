// my questions set to an array
var questions = [
  {
    question: "How many majors has Jack Nicklous Won?",
    answers: [
      { text: "18", correct: true },
      { text: "15", correct: false },
      { text: "11", correct: false },
      { text: "10", correct: false },
    ],
  },

  {
    question: "How many majors has Tiger Woods Won?",
    answers: [
      { text: "15", correct: true },
      { text: "18", correct: false },
      { text: "13", correct: false },
      { text: "10", correct: false },
    ],
  },

  {
    question: "How many majors has Arnold Palmer Won?",
    answers: [
      { text: "7", correct: true },
      { text: "9", correct: false },
      { text: "5", correct: false },
      { text: "10", correct: false },
    ],
  },

  {
    question: "How many majors has Gary Player Won?",
    answers: [
      { text: "9", correct: true },
      { text: "3", correct: false },
      { text: "7", correct: false },
      { text: "12", correct: false },
    ],
  },
];
// Created Start button
var startButton = document.getElementById("start-btn");

var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var shuffledQuestions, currentQuestionIndex;
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-questions");
var timerElement = document.getElementById("timer");
var timer = 75;

// add startbutton
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", function () {
  //add index ++ to question to question
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setNextQuestion();
  }
});
// add function to start game
function startGame() {
  console.log("started");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
}
// added function
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
// created question to show function
function showQuestion(question) {
  console.log(question);
  questionElement.textContent = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    //created a loop
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      // console.log("This answer is correct");
    }
    answerButtonsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}
// created function to reset the answer sheet
function resetState() {
  answerButtonsElement.textContent = "";
  // nextButton.classList.add;
  // while (answerButtonsElement.firstChild) {
  //   answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  // }
}
// created function to select answer. This runs every time a user clicks on an answer
function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  console.log("The value of correct is: " + correct);
  // setStatusClass(document.body, correct);
  // Array.from(answersButtonsElement.children).forEach((button) => {
  //   setStatusClass(button, button.dataset.correct);
  // });
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setNextQuestion();
  }
}
// fucntion for correct or wong
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
//// created a timer and made it increment 10 seconds if a quesiton is not anwered correctly
function setTime() {
  var timerInterval = setInterval(function () {
    timer--; // timer = timer - 1 // timer -= 1
    if (timer === 0) clearInterval(timerInterval);
  }, 1000);
}
