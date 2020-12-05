// create div wrap to place numbers
const div = document.createElement('div')
div.classList.add('numbers-wrapper')

// insert div wrap to existing element in html
const placer = document.querySelector('.content-area')

// create div to add balls numbers
const divNumbers = `
    <div></div>
`
div.innerHTML = divNumbers

// add div for balls numbers to html
const divNumbersEl = div.querySelector('div')
divNumbersEl.classList.add('balls')

// create ul to place generated numbers
const ul_Numbers = `
    <ul>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
    </ul>
`
divNumbersEl.innerHTML = ul_Numbers;

// add ul element to html
const ul_NumberEl = divNumbersEl.querySelector('ul')

const ball1 = ul_NumberEl.querySelector('ul li:nth-child(1)')
const ball2 = ul_NumberEl.querySelector('ul li:nth-child(2)')
const ball3 = ul_NumberEl.querySelector('ul li:nth-child(3)')
const ball4 = ul_NumberEl.querySelector('ul li:nth-child(4)')
const ball5 = ul_NumberEl.querySelector('ul li:nth-child(5)')

ball1.classList.add('ball')
ball2.classList.add('ball')
ball3.classList.add('ball')
ball4.classList.add('ball')
ball5.classList.add('ball')


// get button to start generate numbers
const bt = document.getElementById('spark')
const btReset = document.getElementById('reset')
// create array to store numbers
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


function writeNumbers() {

    placer.insertAdjacentElement('afterbegin', div)

    ball1.innerText = numbers[0]
    ball2.innerText = numbers[1]
    ball3.innerText = numbers[2]
    ball4.innerText = numbers[3]
    ball5.innerText = numbers[4]
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

    writeNumbers()

    bt.classList.add('is-hidden')
    btReset.classList.add('is-visible')

}