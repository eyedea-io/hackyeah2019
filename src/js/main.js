"use strict"

import animate, { turnCharacter } from "./animation"
import database from "../database/questions.json"
let questions = database
let currentQuestion = {}
let selectedId
let currentCharacterPosition = 0
const questionField = document.querySelector(".question")
const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const d = document.getElementById("d")

const getQuestion = () => {
  selectedId = Math.floor(Math.random() * questions.length)
  const selectedQuestion = questions[selectedId]
  currentQuestion = selectedQuestion
  questions = questions.filter(item => item !== selectedQuestion)
  console.log(questions)
  return selectedQuestion
}

const showQuestion = () => {
  const question = getQuestion()
  document.getElementById("title").innerHTML = question.question
  a.innerHTML = question.answers.a
  a.addEventListener("click", handleClick)
  b.innerHTML = question.answers.b
  b.addEventListener("click", handleClick)
  c.innerHTML = question.answers.c
  c.addEventListener("click", handleClick)
  d.innerHTML = question.answers.d
  d.addEventListener("click", handleClick)
}

function handleClick(event) {
  if (event.target.id === currentQuestion.correctAnswer) {
    if (currentCharacterPosition < 39) {
      questionField.classList.add("-hidden")
      ;[1, 2, 3].map((elem, index) => {
        setTimeout(() => {
          currentCharacterPosition++
          moveChar()
        }, 1000 * index)
      })
      setTimeout(() => {
        questionField.classList.remove("-hidden")
        showQuestion()
      }, 3000)
    } else {
      questionField.style.background = "rgba(255, 255, 255, 0)"
      questionField.style.color = "green"
      document.getElementById("title").innerHTML =
        "Congratulations! You are the most eco person on the Earth!"
      a.style.display = "none"
      a.style.color = "#fff"
      b.style.display = "none"
      b.style.color = "#fff"
      c.style.display = "none"
      c.style.color = "#fff"
      d.style.display = "none"
      d.style.color = "#fff"
      turnCharacter(0)
    }
    return true
  } else {
    showCorrectAnswerAndEndTheGame()
  }
}

function moveChar() {
  if (board[currentCharacterPosition].turn !== undefined) {
    turnCharacter(board[currentCharacterPosition].turn)
    setTimeout(
      () => animate(".player", board[currentCharacterPosition].position),
      300
    )
  } else {
    animate(".player", board[currentCharacterPosition].position)
  }
}

function showCorrectAnswerAndEndTheGame() {
  questions = database
  currentCharacterPosition = 0
  document.getElementById(
    questions[selectedId].correctAnswer
  ).style.background = "green"

  setTimeout(() => {
    document.getElementById(
      questions[selectedId].correctAnswer
    ).style.background = "#fff"
    questionField.style.background = "rgba(255, 255, 255, 0)"
    document.getElementById("title").innerHTML = "Game Over!"
    a.style.display = "none"
    a.style.color = "#fff"
    b.style.display = "none"
    b.style.color = "#fff"
    c.style.display = "none"
    c.style.color = "#fff"
    d.style.display = "none"
    d.style.color = "#fff"

    turnCharacter(180)
    moveChar()
  }, 2000)
  setTimeout(() => {
    questionField.classList.add("-hidden")
  }, 4000)
  setTimeout(() => {
    questionField.classList.remove("-hidden")
    questionField.style.background = "rgba(255, 255, 255, 0.4)"
    a.style.display = "inherit"
    a.style.color = "#000"
    b.style.display = "inherit"
    b.style.color = "#000"
    c.style.display = "inherit"
    c.style.color = "#000"
    d.style.display = "inherit"
    d.style.color = "#000"

    showQuestion()
  }, 5000)

  return false
}

// service worker registration - remove if you're not going to use it

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("serviceworker.js").then(
      function(registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        )
        showQuestion()
      },
      function(err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err)
      }
    )
  })
}

const board = [
  { position: "-3.5 0.4 4.5" },
  { position: "-3.5 0.4 3.5" },
  { position: "-3.5 0.4 2.5" },
  { position: "-3.5 0.4 1.5" },
  { position: "-3.5 0.4 0.5" },
  { position: "-3.5 0.4 -0.5" },
  { position: "-3.5 0.4 -1.5" },
  { position: "-3.5 0.4 -2.5" },
  { position: "-3.5 0.4 -3.5" },
  { position: "-2.5 0.4 -3.5", turn: 90 },
  { position: "-1.5 0.4 -3.5" },
  { position: "-0.5 0.4 -3.5" },
  { position: "0.5 0.4 -3.5" },
  { position: "0.5 0.4 -2.5", turn: 0 },
  { position: "0.5 0.4 -1.5" },
  { position: "-.5 0.4 -1.5", turn: -90 },
  { position: "-1.5 0.4 -1.5" },
  { position: "-1.5 0.4 -0.5", turn: 0 },
  { position: "-1.5 0.4 .5" },
  { position: "-1.5 0.4 1.5" },
  { position: "-.5 0.4 1.5", turn: 90 },
  { position: ".5 0.4 1.5" },
  { position: ".5 0.4 2.5", turn: 0 },
  { position: ".5 0.4 3.5" },
  { position: "1.5 0.4 3.5", turn: 90 },
  { position: "2.5 0.4 3.5" },
  { position: "3.5 0.4 3.5" },
  { position: "3.5 0.4 2.5", turn: 180 },
  { position: "3.5 0.4 1.5" },
  { position: "3.5 0.4 0.5" },
  { position: "3.5 0.4 -0.5" },
  { position: "2.5 0.4 -0.5", turn: 270 },
  { position: "1.5 0.4 -.5" },
  { position: "1.5 0.4 -1.5", turn: 180 },
  { position: "1.5 0.4 -2.5" },
  { position: "2.5 0.4 -2.5", turn: 90 },
  { position: "3.5 0.4 -2.5" },
  { position: "3.5 0.4 -3.5", turn: 180 },
  { position: "3.5 0.4 -4.5" }
]
