"use strict"

import animate, { turnCharacter } from "./animation"
import database from "../database/questions.json"
let questions = database
let currentQuestion = {}
let gameStarted = true
let currentCharacterPosition = 0

const getQuestion = () => {
  let selectedId = Math.floor(Math.random() * questions.length)
  const selectedQuestion = questions[selectedId]
  currentQuestion = selectedQuestion
  questions = questions.filter(item => item != selectedQuestion)
  console.log(questions)
  return selectedQuestion
}

const showQuestion = () => {
  const question = getQuestion()
  document.getElementById("title").innerHTML = question.question
  let a = document.getElementById("a")
  a.innerHTML = question.answers.a
  a.addEventListener("click", handleClick)
  let b = document.getElementById("b")
  b.innerHTML = question.answers.b
  b.addEventListener("click", handleClick)
  let c = document.getElementById("c")
  c.innerHTML = question.answers.c
  c.addEventListener("click", handleClick)
  let d = document.getElementById("d")
  d.innerHTML = question.answers.d
  d.addEventListener("click", handleClick)
}

function handleClick(e) {
  if (e.target.id === currentQuestion.correctAnswer) {
    console.log("correct")
    document.querySelector(".question").classList.add("-hidden")
    ;[1, 2, 3].forEach((elem, index) => {
      setTimeout(() => {
        currentCharacterPosition++
        moveChar()
      }, 1000 * index)
    })
    setTimeout(() => {
      document.querySelector(".question").classList.remove("-hidden")
      showQuestion()
    }, 3000)
    return true
  } else {
    //showCorrectAnswer()

    return false
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

// place your code below

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
