"use strict"

import animate, { turnCharacter } from "./animation"
import { board } from "./board"
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

const setFieldsColors = (firstColor, secondColor) => {
  a.style.display = firstColor
  a.style.color = secondColor
  b.style.display = firstColor
  b.style.color = secondColor
  c.style.display = firstColor
  c.style.color = secondColor
  d.style.display = firstColor
  d.style.color = secondColor
}

const getQuestion = () => {
  selectedId = Math.floor(Math.random() * questions.length)
  const selectedQuestion = questions[selectedId]
  currentQuestion = selectedQuestion
  questions = questions.filter(item => item !== selectedQuestion)

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

const blockAnswerFields = () => {
  a.removeEventListener("click", handleClick)
  b.removeEventListener("click", handleClick)
  c.removeEventListener("click", handleClick)
  d.removeEventListener("click", handleClick)
}

const winTheGame = () => {
  questionField.style.background = "rgba(255, 255, 255, 0)"
  questionField.style.color = "green"
  document.getElementById("title").innerHTML =
    "Congratulations! You are the most eco friendly human being!"
  setFieldsColors("none", "#fff")
  turnCharacter(0)
}

const handleClick = event => {
  if (event.target.id === currentQuestion.correctAnswer) {
    questionField.classList.add("-hidden")
    blockAnswerFields()
    ;[1, 2, 3].map((elem, index) => {
      setTimeout(() => {
        currentCharacterPosition++
        moveChar()
      }, 1000 * index)
    })
    setTimeout(() => {
      questionField.classList.remove("-hidden")
      showQuestion()
      if (currentCharacterPosition > 38) {
        return winTheGame()
      }
    }, 3000)

    return true
  } else {
    blockAnswerFields()
    showCorrectAnswerAndEndTheGame()
  }
}

const moveChar = () => {
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

const showCorrectAnswerAndEndTheGame = () => {
  questions = database
  currentCharacterPosition = 0
  document.getElementById(
    questions[selectedId].correctAnswer
  ).style.background = "rgb(57, 148, 14)"
  document.getElementById(questions[selectedId].correctAnswer).style.color =
    "yellow"
  document.getElementById(questions[selectedId].correctAnswer).style.border =
    "1px solid yellow"

  setTimeout(() => {
    document.getElementById(
      questions[selectedId].correctAnswer
    ).style.background = "#fff"
    questionField.style.background = "rgba(255, 255, 255, 0)"
    document.getElementById("title").innerHTML = "Game Over!"
    setFieldsColors("none", "#fff")

    turnCharacter(180)
    moveChar()
  }, 2000)
  setTimeout(() => {
    questionField.classList.add("-hidden")
  }, 4000)
  setTimeout(() => {
    questionField.classList.remove("-hidden")
    questionField.style.background = "rgba(255, 255, 255, 0.4)"
    setFieldsColors("inherit", "#000")
    document.getElementById(questions[selectedId].correctAnswer).style.border =
      "1px solid black"

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
