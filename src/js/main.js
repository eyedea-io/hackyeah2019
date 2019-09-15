"use strict"

import animate, { turnCharacter } from "./animation"
import { getQuestion, showQuestion, handleClick } from "./quiz"

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

let gameStarted = true

const game = () => {
  return board.forEach((elem, index) => {
    setTimeout(() => {
      if (elem.turn !== undefined) {
        turnCharacter(elem.turn)
        setTimeout(() => animate(".player", elem.position), 300)
      } else {
        animate(".player", elem.position)
      }
    }, 1000 * index)
  })
}

if (gameStarted === true) {
  game()
}
