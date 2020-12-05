const bt = document.getElementById('spark')
const numbers = []
let ball

function generateNumber() {
    ball = Math.floor(Math.random() * 10);
}

function addNumber() {
    numbers.push(ball)
}

function checkDuplicate() {
    if (numbers.includes(ball)) {
        console.log('numero duplicado')
        generateNumber()
        checkDuplicate()
    } else {
        addNumber()
    }
}

function createBalls() {
    for (let i = 0; i < 5; i++) {
        generateNumber()
        if (numbers.length > 0) {
            checkDuplicate()
        } else {
            addNumber()
        }
        console.log(numbers[i])
    }
}