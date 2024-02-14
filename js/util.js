'us strict'

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + 1) + min
}



function getRandomColor() {
    const letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
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