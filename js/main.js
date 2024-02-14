'use strict'
var gCurrSizeBall = 100
var gCurrColorBall = 'rgb(255, 0, 119)'
var gCurrSizeBall2 = 100
var gCurrColorBall2 = 'rgb(237, 173, 70)'
var gIsBallThreeClicked = false
var gCurrSize
const maxDiameter = 400


function onBallClick(ball) {
    var addingSize = getRandomInt(20, 60)
    const currBallClass = '.' + ball.classList[0]
    const elBall = document.querySelector(currBallClass)
    if (currBallClass === '.ball') {
        gCurrSize = gCurrSizeBall
    } else {
        gCurrSize = gCurrSizeBall2
        console.log('gCurrSize:', gCurrSize)
    }
    changeColor(elBall,currBallClass)
    changeSize(elBall,addingSize)
    changeInnerText(elBall, addingSize)
    console.log('gCurrSize:', gCurrSize)
    
    if (currBallClass === '.ball') {
        gCurrSizeBall = gCurrSize
    } else {
        gCurrSizeBall2 = gCurrSize
    }
}

function OnThirdBall() {
    const elBall = document.querySelector('.ball')
    const elBall2 = document.querySelector('.ball2')
    
    var temBallSize = gCurrSizeBall
    var temBall2Size = gCurrSizeBall2

    switchInnerText(elBall, elBall2, temBallSize, temBall2Size)
    switchSize(elBall, elBall2, temBallSize, temBall2Size)
    switchColor(elBall, elBall2)
    if (!gIsBallThreeClicked) gIsBallThreeClicked = true
    else gIsBallThreeClicked = false
}

function changeColor(elBall,currBallClass) {
    if (currBallClass === '.ball') {
        gCurrColorBall = getRandomColor()
        elBall.style.backgroundColor = gCurrColorBall

    } else {
        gCurrColorBall2 = getRandomColor()
        elBall.style.backgroundColor = gCurrColorBall2

    }
}

function changeSize(elBall, addingSize) {
    console.log('elBall:', elBall)
    if (gCurrSize + addingSize > maxDiameter) {
        gCurrSize = 100
        elBall.style.width = gCurrSize + 'px'
        elBall.style.height = gCurrSize + 'px'
    } else {
        console.log('gCurrSize:', gCurrSize)
        elBall.style.width = gCurrSize + addingSize + 'px'
        elBall.style.height = gCurrSize + addingSize + 'px'
        gCurrSize += addingSize
    }
}

function changeInnerText(elBall,addingSize) {
    if (gCurrSize + addingSize > maxDiameter) {
        console.log('gCurrSize:', gCurrSize)
        elBall.innerText = gCurrSize
    } else {
        console.log('gCurrSize:', gCurrSize)
        elBall.innerText = gCurrSize
    }
}

function switchInnerText(elBall, elBall2, temBallSize, temBall2Size) {

    if (!gIsBallThreeClicked) {
        elBall.innerText = temBall2Size
        elBall2.innerText = temBallSize
    } else {
        elBall.innerText = temBallSize
        elBall2.innerText = temBall2Size
    }
}

function switchSize(elBall, elBall2, temBallSize, temBall2Size) {
    if (!gIsBallThreeClicked) {
        elBall.style.width = temBall2Size + 'px'
        elBall.style.height = temBall2Size + 'px'

        elBall2.style.width = temBallSize + 'px'
        elBall2.style.height = temBallSize + 'px'
    } else {
        elBall.style.width = temBallSize + 'px'
        elBall.style.height = temBallSize + 'px'

        elBall2.style.width = temBall2Size + 'px'
        elBall2.style.height = temBall2Size + 'px'
    }
}

function switchColor(elBall, elBall2) {
    if (!gIsBallThreeClicked) {
        elBall.style.backgroundColor = gCurrColorBall2
        elBall2.style.backgroundColor = gCurrColorBall

    } else {
        elBall.style.backgroundColor = gCurrColorBall
        elBall2.style.backgroundColor = gCurrColorBall2
    }
}