'use strict'
var gCurrSizeBall = 100
var gCurrSizeBall2 = 100
var gCurrColorBall
var gCurrColorBall2 

const maxDiameter = 400


function onBallClick(ball) {
    var CurrSize
    const addingSize = getRandomInt(20, 60)
    const currBallClass = '.' + ball.classList[0]
    const elBall = document.querySelector(currBallClass)
    const elBallSize = document.querySelector(currBallClass, 'span')
    elBall.style.backgroundColor = getRandomColor()
    
    if (currBallClass === '.ball') {
        CurrSize = gCurrSizeBall
    } else {
        CurrSize = gCurrSizeBall2  
    }

    if (CurrSize + addingSize > maxDiameter) {
        CurrSize = 100
        elBall.style.width = CurrSize + 'px'
        elBall.style.height = CurrSize + 'px'
        elBallSize.innerText = CurrSize
    } else {
        elBall.style.width = CurrSize + addingSize + 'px'
        elBall.style.height = CurrSize + addingSize + 'px'
        CurrSize += addingSize
        elBallSize.innerText = CurrSize
    }
    if (currBallClass === '.ball') {
        gCurrSizeBall = CurrSize 
    } else {
        gCurrSizeBall2 = CurrSize  
    }
}

function OnThirdBall() {

}