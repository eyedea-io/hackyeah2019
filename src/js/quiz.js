import database from "../database/questions.json"
let questions = database
let currentQuestion = {}

export const getQuestion = () => {
  let selectedId = Math.floor(Math.random() * questions.length)
  const selectedQuestion = questions[selectedId]
  currentQuestion = selectedQuestion
  questions = questions.filter(item => item != selectedQuestion)
  console.log(questions)
  return selectedQuestion
}

export const showQuestion = () => {
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

export function handleClick(e) {
  if (e.target.id === currentQuestion.correctAnswer) {
    console.log("correct")
    showQuestion()
    return true
  } else {
    //showCorrectAnswer()
    return false
  }
}
