'use strict'
var gCurrSize = 100

function onBallClick() {
    const addingSize = 50
    const elBall = document.querySelector('.ball')
    elBall.style.width = gCurrSize + addingSize + 'px'
    elBall.style.height = gCurrSize + addingSize + 'px'
    const elBallSize = document.querySelector('.ball-size')
    gCurrSize += addingSize
    elBallSize.innerText = gCurrSize

}