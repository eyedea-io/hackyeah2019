"use strict"

import aframe from "aframe"
import animate from "./animation"

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
  { position: "-3.5 0.4 -3.5", turn: "right" },
  { position: "-2.5 0.4 -3.5" },
  { position: "-1.5 0.4 -3.5" },
  { position: "-0.5 0.4 -3.5" },
  { position: "0.5 0.4 -3.5", turn: "right" },
  { position: "0.5 0.4 -2.5" },
  { position: "0.5 0.4 -1.5", turn: "right" },
  { position: "-.5 0.4 -1.5" },
  { position: "-1.5 0.4 -1.5", turn: "right" },
  { position: "-1.5 0.4 -0.5" },
  { position: "-1.5 0.4 .5" },
  { position: "-1.5 0.4 1.5", turn: "left" },
  { position: "-.5 0.4 1.5" },
  { position: ".5 0.4 1.5", turn: "right" },
  { position: ".5 0.4 2.5" },
  { position: ".5 0.4 3.5", turn: "left" },
  { position: "1.5 0.4 3.5" },
  { position: "2.5 0.4 3.5" },
  { position: "3.5 0.4 3.5" },
  { position: "3.5 0.4 2.5", turn: "left" },
  { position: "3.5 0.4 1.5" },
  { position: "3.5 0.4 0.5" },
  { position: "3.5 0.4 -0.5" },
  { position: "2.5 0.4 -0.5", turn: "left" },
  { position: "1.5 0.4 -.5" },
  { position: "1.5 0.4 -1.5" },
  { position: "1.5 0.4 -2.5" },
  { position: "2.5 0.4 -2.5" },
  { position: "3.5 0.4 -2.5" },
  { position: "3.5 0.4 -3.5" },
  { position: "3.5 0.4 -4.5" },
  { position: "0 0.4 10" }
]

let gameStarted = true

const game = () => {
  board.forEach((elem, index) => {
    setTimeout(() => animate(".player", elem.position), 500 * index)
  })
  return 0
}

if (gameStarted === true) {
  game()
}
