'use strict'
var gCurrSize = 100

function onBallClick() {
    const addingSize = getRandomInt(20,60)
    const elBall = document.querySelector('.ball')
    const elBallSize = document.querySelector('.ball-size')
    elBall.style.backgroundColor = getRandomColor()
    if(gCurrSize < 400){
        elBall.style.width = gCurrSize + addingSize + 'px'
        elBall.style.height = gCurrSize + addingSize + 'px'
        gCurrSize += addingSize
        elBallSize.innerText = gCurrSize
    }else{
        gCurrSize = 100
        elBall.style.width = gCurrSize + 'px'
        elBall.style.height = gCurrSize + 'px'
        elBallSize.innerText = gCurrSize
    }

}