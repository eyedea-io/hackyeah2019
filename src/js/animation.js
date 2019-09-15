const animate = (classOfCharacterToMove, nextPosition) => {
  const animation = document.createElement("a-animation")
  const animatedCharacter = document.querySelector(classOfCharacterToMove)

  animation.setAttribute("attribute", "position")
  animation.setAttribute("dur", "1000")
  animation.setAttribute("to", nextPosition)
  animation.setAttribute("loop", "1")

  return animatedCharacter.appendChild(animation)
}

export const turnCharacter = (classOfCharacterToMove, angle) => {
  const animation = document.createElement("a-animation")
  const animatedCharacter = document.getElementById("main-character")

  animation.setAttribute("attribute", "rotation")
  animation.setAttribute("dur", "1000")
  animation.setAttribute("loop", "1")
  animation.setAttribute("to", `0 ${angle} 0`)
  animatedCharacter.appendChild(animation)
  setTimeout(
    () => animatedCharacter.setAttribute("rotation", `0 ${angle} 0`),
    200
  )
}

export default animate
