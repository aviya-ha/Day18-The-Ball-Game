'use strict'
var gCurrSize = 100

function onBallClick() {
    var addingSize = 50
    const elBall = document.querySelector('.ball')
    elBall.style.width = gCurrSize + addingSize + 'px'
    elBall.style.height = gCurrSize + addingSize + 'px'
    gCurrSize += addingSize
    elBall.innerText = gCurrSize

}