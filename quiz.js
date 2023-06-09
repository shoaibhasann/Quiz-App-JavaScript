const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultsContainer = document.getElementById("results");

const myQuestions = [
  {
    question: "Which planet is known as the Red Planet?",
    answers: {
      a: "Venus",
      b: "Mars",
      c: "Jupiter",
      d: "Saturn",
    },
    correctAnswer: "b",
  },
  {
    question: "Who is the author of famous novel Harry Potter?",
    answers: {
      a: "J.K Rowling",
      b: "Harper Lee",
      c: "Charles Dickens",
      d: "Ernest Hemingway",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the currency of Japan?",
    answers: {
      a: "Yuan",
      b: "Euro",
      c: "Yen",
      d: "Dollar",
    },
    correctAnswer: "c",
  },
  {
    question: "What is chemical symbol of element gold?",
    answers: {
      a: "Ag",
      b: "Fe",
      c: "Hg",
      d: "Au",
    },
    correctAnswer: "d",
  },
  {
    question: "Who painted the famous artwork Mona Lisa?",
    answers: {
      a: "Vincent van Gogh",
      b: "Pablo Picasso",
      c: "Leonardo da Vinci",
      d: "Michelangelo",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Which country is home to the tallest mountain in the world, Mount Everest?",
    answers: {
      a: "India",
      b: "Nepal",
      c: "China",
      d: "Bhutan",
    },
    correctAnswer: "b",
  },
];

function buildQuiz() {
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label><input type="radio" name="question${questionNumber}" value="${letter}" />${currentQuestion.answers[letter]}</label>
                        `
      );
    }
    //console.log(answers);
    output.push(
      `<div class="question">${questionNumber + 1}. ${
        currentQuestion.question
      }</div>
                    <div class="answers">${answers.join("")}</div>
                    `
    );
  });
  //console.log(output);
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");

  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    //find selected answer
    const answerContainer = answerContainers[questionNumber];
    // input[name=question1]:checked
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = "green";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });
  quizContainer.style.display = "none";
  resultsContainer.lastElementChild.innerHTML = `You correct ${numCorrect} out of ${myQuestions.length}`;
  resultsContainer.style.display = "flex";
  submitButton.innerHTML = 'Reset'
  submitButton.addEventListener('click', () => location.reload());
}
buildQuiz();

submitButton.addEventListener("click", showResults);
