"use strict";

let btnYes = document.getElementById("btn-yes");
let playground = document.getElementById("playground");
let imgOne = document.getElementById("img-one");
let paragraph = document.getElementById("paragraph");
let question = document.querySelector(".ready");
let buttonsArea = document.getElementById("buttons");
let imgTwo = document.getElementById("img-two");

let img = [imgOne, imgTwo];

const questions = [
  [
    {
      text: "How many people are in the picture?",
      options: ["14", "18", "16"],
      correctIndex: 2,
    },
    {
      text: "How many dogs are in the picture?",
      options: ["2", "3", "1"],
      correctIndex: 1,
    },
    {
      text: "How many fountains are in the picture?",
      options: ["1", "2", "0"],
      correctIndex: 0,
    },
    {
      text: "What color is the sky have?",
      options: ["Blue", "Pink", "White"],
      correctIndex: 0,
    },
    {
      text: "What color is a bycicle on the picture ?",
      options: ["Red", "Blue", "Pink"],
      correctIndex: 2,
    },
    {
      text: "Is there any baloon ?",
      options: ["Yes, 2", "No", "Yes, 1"],
      correctIndex: 2,
    },
    {
      text: "How many people wear pink ?",
      options: ["4", "5", "7"],
      correctIndex: 1,
    },
  ],
  [
    {
      text: "How many firefighters are in the picture ?",
      options: ["11", "12", "13"],
      correctIndex: 2,
    },
    {
      text: "How many cars are in the picture ?",
      options: ["5", "9", "12"],
      correctIndex: 1,
    },
    {
      text: "How many ladders are in the picture ?",
      options: ["1", "3", "5"],
      correctIndex: 2,
    },
    {
      text: "What color is the burning house ?",
      options: ["Pink", "Red", "Yellow"],
      correctIndex: 1,
    },
    {
      text: "What color do the cleaners on the roof wear ?",
      options: ["Blue", "Brown", "Green"],
      correctIndex: 0,
    },
    {
      text: "What color is the car in front of the hotel ?",
      options: ["Red", "Black", "Grey"],
      correctIndex: 2,
    },
  ],
];

let subQuestionIndex = 0;
let setQuestionIndex = 0;
let currentImgIndex = 0;

function displayNextQuestion() {
  if (subQuestionIndex >= questions[setQuestionIndex].length) {
    buttonsArea.innerHTML = "";
    btnYes.classList.remove("hidden");
    btnYes.textContent = "NEXT";
    question.textContent = "Are you ready for next picture ?";
    setQuestionIndex++;
    currentImgIndex++;
    subQuestionIndex = 0;
    return;
  }

  const currentQuestion = questions[setQuestionIndex][subQuestionIndex];
  question.textContent = currentQuestion.text;
  buttonsArea.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const answerButton = document.createElement("button");
    answerButton.textContent = option;
    answerButton.classList.add("btn-answer");
    answerButton.addEventListener("click", () =>
      handleAnswer(index === currentQuestion.correctIndex)
    );
    buttonsArea.appendChild(answerButton);
  });
}

function handleAnswer(isCorrect) {
  disableButtons();
  let correctIndex = questions[setQuestionIndex][subQuestionIndex].correctIndex;
  let opinios = questions[setQuestionIndex][subQuestionIndex].options;
  question.textContent = isCorrect
    ? "Correct!"
    : "Wrong answer. Correct is " + opinios[correctIndex];

  subQuestionIndex++;
  setTimeout(displayNextQuestion, 2000);
}

btnYes.addEventListener("click", function () {
  paragraph.classList.add("hidden");
  img[currentImgIndex].classList.remove("hidden");
  btnYes.classList.add("hidden");

  //skyje po 20 sekundách obrázek i btn Yes
  setTimeout(function () {
    img[currentImgIndex].classList.add("hidden");
    displayNextQuestion();
  }, 2000);
});

function disableButtons() {
  Array.from(buttonsArea.children).forEach(
    (button) => (button.disabled = true)
  );
}
