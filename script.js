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

var startButton = document.getElementById("start-btn");

var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var shuffledQuestions, currentQuestionIndex;
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-questions");

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", function () {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setNextQuestion();
  }
});
function startGame() {
  console.log("started");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  console.log(question);
  questionElement.textContent = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    answerButtonsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  answerButtonsElement.textContent = "";
  // nextButton.classList.add;
  // while (answerButtonsElement.firstChild) {
  //   answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  // }
}

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answersButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
}

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
