'use strict'
var gCurrSizeBall = 100
var gCurrColorBall = 'rgb(255, 0, 119)'
var gCurrSizeBall2 = 100
var gCurrColorBall2 = 'rgb(237, 173, 70)'
var gIsBallThreeClicked = false
var gCurrSize = 0
const maxDiameter = 400
const minDiameter = 100


function onBallClick(ball) {
    var addingSize = getRandomInt(20, 60)
    const currBallClass = '.' + ball.classList[0]
    const elBall = document.querySelector(currBallClass)
    if (currBallClass === '.ball1') {
        gCurrSize = gCurrSizeBall
    } else {
        gCurrSize = gCurrSizeBall2
    }
    changeColor(elBall, currBallClass)
    changeSizeUp(elBall, addingSize)
    changeInnerText(elBall, addingSize)

    if (currBallClass === '.ball1') {
        gCurrSizeBall = gCurrSize
    } else {
        gCurrSizeBall2 = gCurrSize
    }
}

function OnThirdBall() {
    const elBall = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')

    var temBallSize = gCurrSizeBall
    var temBall2Size = gCurrSizeBall2

    switchInnerText(elBall, elBall2, temBallSize, temBall2Size)
    switchSize(elBall, elBall2, temBallSize, temBall2Size)
    switchColor(elBall, elBall2)
    if (!gIsBallThreeClicked) gIsBallThreeClicked = true
    else gIsBallThreeClicked = false
}

function OnFourBall() {
    const reducedSize = getRandomInt(20, 60)
    const elBall = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')
    var ball = elBall
    if (ball === elBall) {
        console.log('elBall:', elBall)
        gCurrSize = gCurrSizeBall
        changeSizeDown(ball, reducedSize)
        changeInnerTextDown(ball, reducedSize)
        gCurrSizeBall = gCurrSize
        ball = elBall2
    }
    if (ball === elBall2) {
        gCurrSize = gCurrSizeBall2
        changeSizeDown(ball, reducedSize)
        changeInnerTextDown(ball, reducedSize)
        gCurrSizeBall2 = gCurrSize
        ball = elBall
    }
}


function OnFifthBall() {
    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = getRandomColor()
}

function OnSixBall() {
    gCurrColorBall = 'rgb(255, 0, 119)'
    gCurrSizeBall = 100
    gCurrSizeBall2 = 100
    gCurrColorBall2 = 'rgb(237, 173, 70)'
    gIsBallThreeClicked = false
    gCurrSize = 0
    const elBall = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')
    const elBody = document.querySelector('body')

    elBody.style.backgroundColor = 'rgb(15, 14, 14)'

    elBall.style.backgroundColor = gCurrColorBall
    elBall.style.width = gCurrSizeBall + 'px'
    elBall.style.height = gCurrSizeBall + 'px'
    elBall.innerText = gCurrSizeBall

    elBall2.style.backgroundColor = gCurrColorBall
    elBall2.style.width = gCurrSizeBall + 'px'
    elBall2.style.height = gCurrSizeBall + 'px'
    elBall2.innerText = gCurrSizeBall
}

function changeColor(elBall, currBallClass) {
    if (currBallClass === '.ball') {
        gCurrColorBall = getRandomColor()
        elBall.style.backgroundColor = gCurrColorBall

    } else {
        gCurrColorBall2 = getRandomColor()
        elBall.style.backgroundColor = gCurrColorBall2

    }
}

function changeSizeDown(elBall, reducedSize) {
    if (gCurrSize - reducedSize < minDiameter) {
        gCurrSize = 100
        elBall.style.width = gCurrSize + 'px'
        elBall.style.height = gCurrSize + 'px'
    } else {
        elBall.style.width = gCurrSize - reducedSize + 'px'
        elBall.style.height = gCurrSize - reducedSize + 'px'
        gCurrSize -= reducedSize
    }
}

function changeSizeUp(elBall, addingSize) {
    if (gCurrSize + addingSize > maxDiameter) {
        gCurrSize = 100
        elBall.style.width = gCurrSize + 'px'
        elBall.style.height = gCurrSize + 'px'
    } else {
        elBall.style.width = gCurrSize + addingSize + 'px'
        elBall.style.height = gCurrSize + addingSize + 'px'
        gCurrSize += addingSize
    }
}

function changeInnerTextDown(elBall, reducedSize) {
    if (gCurrSize - reducedSize < minDiameter) {
        elBall.innerText = gCurrSize
    } else {
        elBall.innerText = gCurrSize
    }
}

function changeInnerText(elBall, addingSize) {
    if (gCurrSize + addingSize > maxDiameter) {
        elBall.innerText = gCurrSize
    } else {
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