!function(n){var i={};function t(e){if(i[e])return i[e].exports;var c=i[e]={i:e,l:!1,exports:{}};return n[e].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=n,t.c=i,t.d=function(n,i,e){t.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,i){if(1&i&&(n=t(n)),8&i)return n;if(4&i&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&i&&"string"!=typeof n)for(var c in n)t.d(e,c,function(i){return n[i]}.bind(null,c));return e},t.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(i,"a",i),i},t.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},t.p="",t(t.s=1)}([function(module){eval('module.exports = JSON.parse("[{\\"id\\":0,\\"question\\":\\"What you shouldn’t put into the container for glass?\\",\\"answers\\":{\\"a\\":\\"beer bottle\\",\\"b\\":\\"marmolade jar\\",\\"c\\":\\"cosmetic cream jar\\",\\"d\\":\\"broken glass\\"},\\"correctAnswer\\":\\"d\\"},{\\"id\\":1,\\"question\\":\\"How much CO2 is created from burning one litre gasoline?\\",\\"answers\\":{\\"a\\":\\"576 grams\\",\\"b\\":\\"8,7 kilograms\\",\\"c\\":\\"2.35 kilograms\\",\\"d\\":\\"17 grams\\"},\\"correctAnswer\\":\\"c\\"},{\\"id\\":2,\\"question\\":\\"How much water is needed to produce one cotton T-shirt?\\",\\"answers\\":{\\"a\\":\\"15 litres\\",\\"b\\":\\"2700 litres\\",\\"c\\":\\"675 litres\\",\\"d\\":\\"87 litras\\"},\\"correctAnswer\\":\\"c\\"},{\\"id\\":3,\\"question\\":\\"Which country from the list owns the most resources of drinking water?\\",\\"answers\\":{\\"a\\":\\"Mali\\",\\"b\\":\\"Poland\\",\\"c\\":\\"Lithuania\\",\\"d\\":\\"Switzerland\\"},\\"correctAnswer\\":\\"a\\"},{\\"id\\":4,\\"question\\":\\"What is the most polluting waste in the oceans?\\",\\"answers\\":{\\"a\\":\\"plastic Bags\\",\\"b\\":\\"straws\\",\\"c\\":\\"cigarettes\\",\\"d\\":\\"food wrappers\\"},\\"correctAnswer\\":\\"c\\"},{\\"id\\":5,\\"question\\":\\"Which one of these foods requires the least amount of water per 1 kg to be produced?\\",\\"answers\\":{\\"a\\":\\"wheat\\",\\"b\\":\\"beef\\",\\"c\\":\\"pork\\",\\"d\\":\\"vegetables\\"},\\"correctAnswer\\":\\"d\\"},{\\"id\\":6,\\"question\\":\\"Which of these items can\'t be recycled?\\",\\"answers\\":{\\"a\\":\\"used pizza box\\",\\"b\\":\\"wine glasses\\",\\"c\\":\\"kitchen foil\\",\\"d\\":\\"diapers\\"},\\"correctAnswer\\":\\"c\\"},{\\"id\\":7,\\"question\\":\\"What is the cleanest mean of transportation?\\",\\"answers\\":{\\"a\\":\\"bike\\",\\"b\\":\\"car\\",\\"c\\":\\"train\\",\\"d\\":\\"plane\\"},\\"correctAnswer\\":\\"a\\"},{\\"id\\":8,\\"question\\":\\"Empty milk carton belongs to:\\",\\"answers\\":{\\"a\\":\\"plastic and metal waste bin\\",\\"b\\":\\"paper bin\\",\\"c\\":\\"glass bin\\",\\"d\\":\\"hazardous waste bin\\"},\\"correctAnswer\\":\\"a\\"},{\\"id\\":9,\\"question\\":\\"Which fuel produces the most emissions?\\",\\"answers\\":{\\"a\\":\\"coal\\",\\"b\\":\\"wood pellet\\",\\"c\\":\\"wood\\",\\"d\\":\\"natural gas\\"},\\"correctAnswer\\":\\"c\\"},{\\"id\\":10,\\"question\\":\\"What is the main cause, that makes polypropylene and polyethylene very hard to recycle?\\",\\"answers\\":{\\"a\\":\\"it differs with color\\",\\"b\\":\\"it melts in different temperatures\\",\\"c\\":\\"it can not mix together\\",\\"d\\":\\"it is too light\\"},\\"correctAnswer\\":\\"c\\"},{\\"id\\":11,\\"question\\":\\"What is on top of the Waste Hierarchy tool?\\",\\"answers\\":{\\"a\\":\\"minimisation\\",\\"b\\":\\"recycling\\",\\"c\\":\\"prevention \\",\\"d\\":\\"reuse\\"},\\"correctAnswer\\":\\"c\\"}]");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIwLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/js/animation.js\nconst animate = (classOfCharacterToMove, nextPosition) => {\n  const animation = document.createElement("a-animation")\n  const animatedCharacter = document.querySelector(classOfCharacterToMove)\n\n  animation.setAttribute("attribute", "position")\n  animation.setAttribute("dur", "1000")\n  animation.setAttribute("to", nextPosition)\n  animation.setAttribute("loop", "1")\n\n  return animatedCharacter.appendChild(animation)\n}\n\nconst turnCharacter = angle => {\n  const animation = document.createElement("a-animation")\n  const animatedCharacter = document.getElementById("main-character")\n\n  animation.setAttribute("attribute", "rotation")\n  animation.setAttribute("dur", "1000")\n  animation.setAttribute("loop", "1")\n  animation.setAttribute("to", `0 ${angle} 0`)\n  animatedCharacter.appendChild(animation)\n  setTimeout(\n    () => animatedCharacter.setAttribute("rotation", `0 ${angle} 0`),\n    200\n  )\n}\n\n/* harmony default export */ var animation = (animate);\n\n// EXTERNAL MODULE: ./src/database/questions.json\nvar questions = __webpack_require__(0);\n\n// CONCATENATED MODULE: ./src/js/main.js\n\n\n\n\nlet main_questions = questions\nlet currentQuestion = {}\nlet gameStarted = true\nlet currentCharacterPosition = 0\n\nconst getQuestion = () => {\n  let selectedId = Math.floor(Math.random() * main_questions.length)\n  const selectedQuestion = main_questions[selectedId]\n  currentQuestion = selectedQuestion\n  main_questions = main_questions.filter(item => item != selectedQuestion)\n  console.log(main_questions)\n  return selectedQuestion\n}\n\nconst showQuestion = () => {\n  const question = getQuestion()\n  document.getElementById("title").innerHTML = question.question\n  let a = document.getElementById("a")\n  a.innerHTML = question.answers.a\n  a.addEventListener("click", handleClick)\n  let b = document.getElementById("b")\n  b.innerHTML = question.answers.b\n  b.addEventListener("click", handleClick)\n  let c = document.getElementById("c")\n  c.innerHTML = question.answers.c\n  c.addEventListener("click", handleClick)\n  let d = document.getElementById("d")\n  d.innerHTML = question.answers.d\n  d.addEventListener("click", handleClick)\n}\n\nfunction handleClick(e) {\n  if (e.target.id === currentQuestion.correctAnswer) {\n    console.log("correct")\n    document.querySelector(".question").classList.add("-hidden")\n    ;[1, 2, 3].forEach((elem, index) => {\n      setTimeout(() => {\n        currentCharacterPosition++\n        moveChar()\n      }, 1000 * index)\n    })\n    setTimeout(() => {\n      document.querySelector(".question").classList.remove("-hidden")\n      showQuestion()\n    }, 3000)\n    return true\n  } else {\n    //showCorrectAnswer()\n\n    return false\n  }\n}\n\nfunction moveChar() {\n  if (board[currentCharacterPosition].turn !== undefined) {\n    turnCharacter(board[currentCharacterPosition].turn)\n    setTimeout(\n      () => animation(".player", board[currentCharacterPosition].position),\n      300\n    )\n  } else {\n    animation(".player", board[currentCharacterPosition].position)\n  }\n}\n\n// service worker registration - remove if you\'re not going to use it\n\nif ("serviceWorker" in navigator) {\n  window.addEventListener("load", function() {\n    navigator.serviceWorker.register("serviceworker.js").then(\n      function(registration) {\n        // Registration was successful\n        console.log(\n          "ServiceWorker registration successful with scope: ",\n          registration.scope\n        )\n        showQuestion()\n      },\n      function(err) {\n        // registration failed :(\n        console.log("ServiceWorker registration failed: ", err)\n      }\n    )\n  })\n}\n\n// place your code below\n\nconst board = [\n  { position: "-3.5 0.4 4.5" },\n  { position: "-3.5 0.4 3.5" },\n  { position: "-3.5 0.4 2.5" },\n  { position: "-3.5 0.4 1.5" },\n  { position: "-3.5 0.4 0.5" },\n  { position: "-3.5 0.4 -0.5" },\n  { position: "-3.5 0.4 -1.5" },\n  { position: "-3.5 0.4 -2.5" },\n  { position: "-3.5 0.4 -3.5" },\n  { position: "-2.5 0.4 -3.5", turn: 90 },\n  { position: "-1.5 0.4 -3.5" },\n  { position: "-0.5 0.4 -3.5" },\n  { position: "0.5 0.4 -3.5" },\n  { position: "0.5 0.4 -2.5", turn: 0 },\n  { position: "0.5 0.4 -1.5" },\n  { position: "-.5 0.4 -1.5", turn: -90 },\n  { position: "-1.5 0.4 -1.5" },\n  { position: "-1.5 0.4 -0.5", turn: 0 },\n  { position: "-1.5 0.4 .5" },\n  { position: "-1.5 0.4 1.5" },\n  { position: "-.5 0.4 1.5", turn: 90 },\n  { position: ".5 0.4 1.5" },\n  { position: ".5 0.4 2.5", turn: 0 },\n  { position: ".5 0.4 3.5" },\n  { position: "1.5 0.4 3.5", turn: 90 },\n  { position: "2.5 0.4 3.5" },\n  { position: "3.5 0.4 3.5" },\n  { position: "3.5 0.4 2.5", turn: 180 },\n  { position: "3.5 0.4 1.5" },\n  { position: "3.5 0.4 0.5" },\n  { position: "3.5 0.4 -0.5" },\n  { position: "2.5 0.4 -0.5", turn: 270 },\n  { position: "1.5 0.4 -.5" },\n  { position: "1.5 0.4 -1.5", turn: 180 },\n  { position: "1.5 0.4 -2.5" },\n  { position: "2.5 0.4 -2.5", turn: 90 },\n  { position: "3.5 0.4 -2.5" },\n  { position: "3.5 0.4 -3.5", turn: 180 },\n  { position: "3.5 0.4 -4.5" }\n]\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYW5pbWF0aW9uLmpzPzg1OTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanM/OTI5MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE1BQU07QUFDMUM7QUFDQTtBQUNBLDBEQUEwRCxNQUFNO0FBQ2hFO0FBQ0E7QUFDQTs7QUFFZSxxREFBTzs7Ozs7O0FDM0JWOztBQUV3QztBQUNIO0FBQ2pELElBQUksY0FBUyxHQUFHLFNBQVE7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLGNBQVM7QUFDdkQsMkJBQTJCLGNBQVM7QUFDcEM7QUFDQSxFQUFFLGNBQVMsR0FBRyxjQUFTO0FBQ3ZCLGNBQWMsY0FBUztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxhQUFhO0FBQ2pCO0FBQ0EsWUFBWSxTQUFPO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsSUFBSSxTQUFPO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0EsR0FBRywyQkFBMkI7QUFDOUIsR0FBRywyQkFBMkI7QUFDOUIsR0FBRywyQkFBMkI7QUFDOUIsR0FBRywyQkFBMkI7QUFDOUIsR0FBRywyQkFBMkI7QUFDOUIsR0FBRyw0QkFBNEI7QUFDL0IsR0FBRyw0QkFBNEI7QUFDL0IsR0FBRyw0QkFBNEI7QUFDL0IsR0FBRyw0QkFBNEI7QUFDL0IsR0FBRyxzQ0FBc0M7QUFDekMsR0FBRyw0QkFBNEI7QUFDL0IsR0FBRyw0QkFBNEI7QUFDL0IsR0FBRywyQkFBMkI7QUFDOUIsR0FBRyxvQ0FBb0M7QUFDdkMsR0FBRywyQkFBMkI7QUFDOUIsR0FBRyxzQ0FBc0M7QUFDekMsR0FBRyw0QkFBNEI7QUFDL0IsR0FBRyxxQ0FBcUM7QUFDeEMsR0FBRywwQkFBMEI7QUFDN0IsR0FBRywyQkFBMkI7QUFDOUIsR0FBRyxvQ0FBb0M7QUFDdkMsR0FBRyx5QkFBeUI7QUFDNUIsR0FBRyxrQ0FBa0M7QUFDckMsR0FBRyx5QkFBeUI7QUFDNUIsR0FBRyxvQ0FBb0M7QUFDdkMsR0FBRywwQkFBMEI7QUFDN0IsR0FBRywwQkFBMEI7QUFDN0IsR0FBRyxxQ0FBcUM7QUFDeEMsR0FBRywwQkFBMEI7QUFDN0IsR0FBRywwQkFBMEI7QUFDN0IsR0FBRywyQkFBMkI7QUFDOUIsR0FBRyxzQ0FBc0M7QUFDekMsR0FBRywwQkFBMEI7QUFDN0IsR0FBRyxzQ0FBc0M7QUFDekMsR0FBRywyQkFBMkI7QUFDOUIsR0FBRyxxQ0FBcUM7QUFDeEMsR0FBRywyQkFBMkI7QUFDOUIsR0FBRyxzQ0FBc0M7QUFDekMsR0FBRztBQUNIIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhbmltYXRlID0gKGNsYXNzT2ZDaGFyYWN0ZXJUb01vdmUsIG5leHRQb3NpdGlvbikgPT4ge1xuICBjb25zdCBhbmltYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1hbmltYXRpb25cIilcbiAgY29uc3QgYW5pbWF0ZWRDaGFyYWN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzT2ZDaGFyYWN0ZXJUb01vdmUpXG5cbiAgYW5pbWF0aW9uLnNldEF0dHJpYnV0ZShcImF0dHJpYnV0ZVwiLCBcInBvc2l0aW9uXCIpXG4gIGFuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoXCJkdXJcIiwgXCIxMDAwXCIpXG4gIGFuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0b1wiLCBuZXh0UG9zaXRpb24pXG4gIGFuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoXCJsb29wXCIsIFwiMVwiKVxuXG4gIHJldHVybiBhbmltYXRlZENoYXJhY3Rlci5hcHBlbmRDaGlsZChhbmltYXRpb24pXG59XG5cbmV4cG9ydCBjb25zdCB0dXJuQ2hhcmFjdGVyID0gYW5nbGUgPT4ge1xuICBjb25zdCBhbmltYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1hbmltYXRpb25cIilcbiAgY29uc3QgYW5pbWF0ZWRDaGFyYWN0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY2hhcmFjdGVyXCIpXG5cbiAgYW5pbWF0aW9uLnNldEF0dHJpYnV0ZShcImF0dHJpYnV0ZVwiLCBcInJvdGF0aW9uXCIpXG4gIGFuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoXCJkdXJcIiwgXCIxMDAwXCIpXG4gIGFuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoXCJsb29wXCIsIFwiMVwiKVxuICBhbmltYXRpb24uc2V0QXR0cmlidXRlKFwidG9cIiwgYDAgJHthbmdsZX0gMGApXG4gIGFuaW1hdGVkQ2hhcmFjdGVyLmFwcGVuZENoaWxkKGFuaW1hdGlvbilcbiAgc2V0VGltZW91dChcbiAgICAoKSA9PiBhbmltYXRlZENoYXJhY3Rlci5zZXRBdHRyaWJ1dGUoXCJyb3RhdGlvblwiLCBgMCAke2FuZ2xlfSAwYCksXG4gICAgMjAwXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgYW5pbWF0ZVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IGFuaW1hdGUsIHsgdHVybkNoYXJhY3RlciB9IGZyb20gXCIuL2FuaW1hdGlvblwiXG5pbXBvcnQgZGF0YWJhc2UgZnJvbSBcIi4uL2RhdGFiYXNlL3F1ZXN0aW9ucy5qc29uXCJcbmxldCBxdWVzdGlvbnMgPSBkYXRhYmFzZVxubGV0IGN1cnJlbnRRdWVzdGlvbiA9IHt9XG5sZXQgZ2FtZVN0YXJ0ZWQgPSB0cnVlXG5sZXQgY3VycmVudENoYXJhY3RlclBvc2l0aW9uID0gMFxuXG5jb25zdCBnZXRRdWVzdGlvbiA9ICgpID0+IHtcbiAgbGV0IHNlbGVjdGVkSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBxdWVzdGlvbnMubGVuZ3RoKVxuICBjb25zdCBzZWxlY3RlZFF1ZXN0aW9uID0gcXVlc3Rpb25zW3NlbGVjdGVkSWRdXG4gIGN1cnJlbnRRdWVzdGlvbiA9IHNlbGVjdGVkUXVlc3Rpb25cbiAgcXVlc3Rpb25zID0gcXVlc3Rpb25zLmZpbHRlcihpdGVtID0+IGl0ZW0gIT0gc2VsZWN0ZWRRdWVzdGlvbilcbiAgY29uc29sZS5sb2cocXVlc3Rpb25zKVxuICByZXR1cm4gc2VsZWN0ZWRRdWVzdGlvblxufVxuXG5jb25zdCBzaG93UXVlc3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHF1ZXN0aW9uID0gZ2V0UXVlc3Rpb24oKVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLmlubmVySFRNTCA9IHF1ZXN0aW9uLnF1ZXN0aW9uXG4gIGxldCBhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhXCIpXG4gIGEuaW5uZXJIVE1MID0gcXVlc3Rpb24uYW5zd2Vycy5hXG4gIGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKVxuICBsZXQgYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYlwiKVxuICBiLmlubmVySFRNTCA9IHF1ZXN0aW9uLmFuc3dlcnMuYlxuICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljaylcbiAgbGV0IGMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNcIilcbiAgYy5pbm5lckhUTUwgPSBxdWVzdGlvbi5hbnN3ZXJzLmNcbiAgYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spXG4gIGxldCBkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkXCIpXG4gIGQuaW5uZXJIVE1MID0gcXVlc3Rpb24uYW5zd2Vycy5kXG4gIGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gIGlmIChlLnRhcmdldC5pZCA9PT0gY3VycmVudFF1ZXN0aW9uLmNvcnJlY3RBbnN3ZXIpIHtcbiAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RcIilcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0aW9uXCIpLmNsYXNzTGlzdC5hZGQoXCItaGlkZGVuXCIpXG4gICAgO1sxLCAyLCAzXS5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRDaGFyYWN0ZXJQb3NpdGlvbisrXG4gICAgICAgIG1vdmVDaGFyKClcbiAgICAgIH0sIDEwMDAgKiBpbmRleClcbiAgICB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdGlvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiLWhpZGRlblwiKVxuICAgICAgc2hvd1F1ZXN0aW9uKClcbiAgICB9LCAzMDAwKVxuICAgIHJldHVybiB0cnVlXG4gIH0gZWxzZSB7XG4gICAgLy9zaG93Q29ycmVjdEFuc3dlcigpXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlQ2hhcigpIHtcbiAgaWYgKGJvYXJkW2N1cnJlbnRDaGFyYWN0ZXJQb3NpdGlvbl0udHVybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdHVybkNoYXJhY3Rlcihib2FyZFtjdXJyZW50Q2hhcmFjdGVyUG9zaXRpb25dLnR1cm4pXG4gICAgc2V0VGltZW91dChcbiAgICAgICgpID0+IGFuaW1hdGUoXCIucGxheWVyXCIsIGJvYXJkW2N1cnJlbnRDaGFyYWN0ZXJQb3NpdGlvbl0ucG9zaXRpb24pLFxuICAgICAgMzAwXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGFuaW1hdGUoXCIucGxheWVyXCIsIGJvYXJkW2N1cnJlbnRDaGFyYWN0ZXJQb3NpdGlvbl0ucG9zaXRpb24pXG4gIH1cbn1cblxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XG5cbmlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFwic2VydmljZXdvcmtlci5qc1wiKS50aGVuKFxuICAgICAgZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBcIlNlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogXCIsXG4gICAgICAgICAgcmVnaXN0cmF0aW9uLnNjb3BlXG4gICAgICAgIClcbiAgICAgICAgc2hvd1F1ZXN0aW9uKClcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogXCIsIGVycilcbiAgICAgIH1cbiAgICApXG4gIH0pXG59XG5cbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xuXG5jb25zdCBib2FyZCA9IFtcbiAgeyBwb3NpdGlvbjogXCItMy41IDAuNCA0LjVcIiB9LFxuICB7IHBvc2l0aW9uOiBcIi0zLjUgMC40IDMuNVwiIH0sXG4gIHsgcG9zaXRpb246IFwiLTMuNSAwLjQgMi41XCIgfSxcbiAgeyBwb3NpdGlvbjogXCItMy41IDAuNCAxLjVcIiB9LFxuICB7IHBvc2l0aW9uOiBcIi0zLjUgMC40IDAuNVwiIH0sXG4gIHsgcG9zaXRpb246IFwiLTMuNSAwLjQgLTAuNVwiIH0sXG4gIHsgcG9zaXRpb246IFwiLTMuNSAwLjQgLTEuNVwiIH0sXG4gIHsgcG9zaXRpb246IFwiLTMuNSAwLjQgLTIuNVwiIH0sXG4gIHsgcG9zaXRpb246IFwiLTMuNSAwLjQgLTMuNVwiIH0sXG4gIHsgcG9zaXRpb246IFwiLTIuNSAwLjQgLTMuNVwiLCB0dXJuOiA5MCB9LFxuICB7IHBvc2l0aW9uOiBcIi0xLjUgMC40IC0zLjVcIiB9LFxuICB7IHBvc2l0aW9uOiBcIi0wLjUgMC40IC0zLjVcIiB9LFxuICB7IHBvc2l0aW9uOiBcIjAuNSAwLjQgLTMuNVwiIH0sXG4gIHsgcG9zaXRpb246IFwiMC41IDAuNCAtMi41XCIsIHR1cm46IDAgfSxcbiAgeyBwb3NpdGlvbjogXCIwLjUgMC40IC0xLjVcIiB9LFxuICB7IHBvc2l0aW9uOiBcIi0uNSAwLjQgLTEuNVwiLCB0dXJuOiAtOTAgfSxcbiAgeyBwb3NpdGlvbjogXCItMS41IDAuNCAtMS41XCIgfSxcbiAgeyBwb3NpdGlvbjogXCItMS41IDAuNCAtMC41XCIsIHR1cm46IDAgfSxcbiAgeyBwb3NpdGlvbjogXCItMS41IDAuNCAuNVwiIH0sXG4gIHsgcG9zaXRpb246IFwiLTEuNSAwLjQgMS41XCIgfSxcbiAgeyBwb3NpdGlvbjogXCItLjUgMC40IDEuNVwiLCB0dXJuOiA5MCB9LFxuICB7IHBvc2l0aW9uOiBcIi41IDAuNCAxLjVcIiB9LFxuICB7IHBvc2l0aW9uOiBcIi41IDAuNCAyLjVcIiwgdHVybjogMCB9LFxuICB7IHBvc2l0aW9uOiBcIi41IDAuNCAzLjVcIiB9LFxuICB7IHBvc2l0aW9uOiBcIjEuNSAwLjQgMy41XCIsIHR1cm46IDkwIH0sXG4gIHsgcG9zaXRpb246IFwiMi41IDAuNCAzLjVcIiB9LFxuICB7IHBvc2l0aW9uOiBcIjMuNSAwLjQgMy41XCIgfSxcbiAgeyBwb3NpdGlvbjogXCIzLjUgMC40IDIuNVwiLCB0dXJuOiAxODAgfSxcbiAgeyBwb3NpdGlvbjogXCIzLjUgMC40IDEuNVwiIH0sXG4gIHsgcG9zaXRpb246IFwiMy41IDAuNCAwLjVcIiB9LFxuICB7IHBvc2l0aW9uOiBcIjMuNSAwLjQgLTAuNVwiIH0sXG4gIHsgcG9zaXRpb246IFwiMi41IDAuNCAtMC41XCIsIHR1cm46IDI3MCB9LFxuICB7IHBvc2l0aW9uOiBcIjEuNSAwLjQgLS41XCIgfSxcbiAgeyBwb3NpdGlvbjogXCIxLjUgMC40IC0xLjVcIiwgdHVybjogMTgwIH0sXG4gIHsgcG9zaXRpb246IFwiMS41IDAuNCAtMi41XCIgfSxcbiAgeyBwb3NpdGlvbjogXCIyLjUgMC40IC0yLjVcIiwgdHVybjogOTAgfSxcbiAgeyBwb3NpdGlvbjogXCIzLjUgMC40IC0yLjVcIiB9LFxuICB7IHBvc2l0aW9uOiBcIjMuNSAwLjQgLTMuNVwiLCB0dXJuOiAxODAgfSxcbiAgeyBwb3NpdGlvbjogXCIzLjUgMC40IC00LjVcIiB9XG5dXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')}]);