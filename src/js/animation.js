const animate = (classOfCharacterToMove, nextPosition) => {
    const animation = document.createElement('a-animation')
    const mainAnimation = document.querySelector(classOfCharacterToMove)
    
    animation.setAttribute('attribute', 'position')
    animation.setAttribute('dur', '1000')
    animation.setAttribute('to', nextPosition)
    animation.setAttribute('loop', '1')
    
    return mainAnimation.appendChild(animation)
}

export default animate
