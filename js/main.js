'use strict'
var gCurrSizeBall = 100
var gCurrColorBall = 'rgb(255, 0, 119)'
var gCurrSizeBall2 = 100
var gCurrColorBall2 = 'rgb(237, 173, 70)'
var gIsBallThreeClicked = false



const maxDiameter = 400


function onBallClick(ball,) {
    var CurrSize
    const addingSize = getRandomInt(20, 60)
    const currBallClass = '.' + ball.classList[0]
    const elBall = document.querySelector(currBallClass)
    const elBallSize = document.querySelector(currBallClass, 'span')
    if (currBallClass === '.ball') {
        gCurrColorBall = getRandomColor()
        elBall.style.backgroundColor = gCurrColorBall
        CurrSize = gCurrSizeBall
    } else {
        gCurrColorBall2 = getRandomColor()
        elBall.style.backgroundColor = gCurrColorBall2
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
    const elBall = document.querySelector('.ball')
    const elBall2 = document.querySelector('.ball2')

    var temBallSize = gCurrSizeBall
    var temBall2Size = gCurrSizeBall2
    switchInnerText()
    
    if (!gIsBallThreeClicked) {
        elBall.style.backgroundColor = gCurrColorBall2
        elBall2.style.backgroundColor = gCurrColorBall

        
        elBall.style.width = temBall2Size + 'px'
        elBall.style.height = temBall2Size + 'px'

       
        elBall2.style.width = temBallSize + 'px'
        elBall2.style.height = temBallSize + 'px'

        gIsBallThreeClicked = true

    } else {
        elBall.style.backgroundColor = gCurrColorBall
        elBall2.style.backgroundColor = gCurrColorBall2

        
        elBall.style.width = temBallSize + 'px'
        elBall.style.height = temBallSize + 'px'

        
        elBall2.style.width = temBall2Size + 'px'
        elBall2.style.height = temBall2Size + 'px'

        gIsBallThreeClicked = false

    }
}


function switchInnerText() {
    const elBall = document.querySelector('.ball') 
    const elBall2 = document.querySelector('.ball2')
  
    var temBallSize = gCurrSizeBall
    var temBall2Size = gCurrSizeBall2
    if (!gIsBallThreeClicked) {
        elBall.innerText = temBall2Size
        elBall2.innerText = temBallSize
    } else {
        elBall.innerText = temBallSize
        elBall2.innerText = temBall2Size
    }
}