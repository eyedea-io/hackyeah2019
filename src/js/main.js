"use strict"

import animate, { turnCharacter } from "./animation"
import database from "../database/questions.json"
let questions = database
let currentQuestion = {}
let currentCharacterPosition = 0
let selectedId

const getQuestion = () => {
  selectedId = Math.floor(Math.random() * questions.length)
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
    if (currentCharacterPosition > 36) {
      document.querySelector(".question").style.background =
        "rgba(255, 255, 255, 0)"
      document.querySelector(".question").style.color = "green"
      document.getElementById("title").innerHTML =
        "Congratulations! You are the most eco person on the Earth!"
      let a = document.getElementById("a")
      a.style.display = "none"
      a.style.color = "#fff"
      let b = document.getElementById("b")
      b.style.display = "none"
      b.style.color = "#fff"
      let c = document.getElementById("c")
      c.style.display = "none"
      c.style.color = "#fff"
      let d = document.getElementById("d")
      d.style.display = "none"
      d.style.color = "#fff"
      turnCharacter(0)
    } else {
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
    }
    return true
  } else {
    //showCorrectAnswer()
    document.getElementById(
      questions[selectedId].correctAnswer
    ).style.background = "green"
    currentCharacterPosition = 0
    setTimeout(() => {
      document.getElementById(
        questions[selectedId].correctAnswer
      ).style.background = "#fff"
      document.querySelector(".question").style.background =
        "rgba(255, 255, 255, 0)"
      document.getElementById("title").innerHTML = "Game Over!"
      let a = document.getElementById("a")
      a.style.display = "none"
      a.style.color = "#fff"
      let b = document.getElementById("b")
      b.style.display = "none"
      b.style.color = "#fff"
      let c = document.getElementById("c")
      c.style.display = "none"
      c.style.color = "#fff"
      let d = document.getElementById("d")
      d.style.display = "none"
      d.style.color = "#fff"
      turnCharacter(180)
      moveChar()
    }, 2000)
    setTimeout(() => {
      document.querySelector(".question").classList.add("-hidden")
    }, 4000)
    setTimeout(() => {
      document.querySelector(".question").classList.remove("-hidden")
      document.querySelector(".question").style.background =
        "rgba(255, 255, 255, 0.4)"
      let a = document.getElementById("a")
      a.style.display = "inherit"
      a.style.color = "#000"
      let b = document.getElementById("b")
      b.style.display = "inherit"
      b.style.color = "#000"
      let c = document.getElementById("c")
      c.style.display = "inherit"
      c.style.color = "#000"
      let d = document.getElementById("d")
      d.style.display = "inherit"
      d.style.color = "#000"

      showQuestion()
    }, 6000)

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
