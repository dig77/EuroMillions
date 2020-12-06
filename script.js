// create div wrap to place numbers
const div = document.createElement('div')
div.classList.add('numbers-wrapper')

// insert div wrap to already existing element in html
const placer = document.querySelector('.content-area')
placer.insertAdjacentElement('afterbegin', div)

// create div to add balls (numbers)
const divNumbers = `
    <div></div>
`
div.innerHTML = divNumbers

// add div for balls to html
const divNumbersEl = div.querySelector('div')
divNumbersEl.classList.add('balls')

// create div to add stars
const divStars = ` 
<div></div>
      `
div.insertAdjacentHTML('beforeend', divStars)

// add div for stars to html
const divStarsEl = div.querySelector('div:nth-child(2)')
divStarsEl.classList.add('stars')


// get button to start generate numbers
const bt = document.getElementById('spark')

// get button to refresh page
const btReset = document.getElementById('reset')

// create array to store numbers
const numbers = []
// create array to store stars
const stars = []

// variable to store ball
let ball
// variable to store star
let star

// generate random number between 1 and 50
function generateNumber() {
    ball = Math.floor(Math.random() * 50) + 1
}
// generate random star between 1 and 12
function generateStar() {
    star = Math.floor(Math.random() * 12) + 1
}

// add ball to numbers array
function addNumber() {
    numbers.push(ball)
}
// add star to stars array
function addStar() {
    stars.push(star)
}

// check duplicated number
function checkDuplicate() {
    if (numbers.includes(ball)) {
        console.log('numero duplicado')
        generateNumber()
        checkDuplicate()
    } else {
        addNumber()
    }
}

// check duplicated star
function checkDuplicateStar() {
    if (stars.includes(star)) {
        console.log('estrela duplicada')
        generateStar()
        checkDuplicateStar()
    } else {
        addStar()
    }
}

// add generated numbers to htlm elements
function writeNumbers() {

    //  add title to numbers area
    const title = `
            <h2></h2>  
    `
    divNumbersEl.innerHTML = title
    const numbersTitle = divNumbersEl.querySelector('h2')
    divNumbersEl.insertAdjacentElement('beforebegin', numbersTitle)
    numbersTitle.innerText = 'Números'

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

    ball1.innerText = numbers[0]
    ball2.innerText = numbers[1]
    ball3.innerText = numbers[2]
    ball4.innerText = numbers[3]
    ball5.innerText = numbers[4]
}

function writeStars() {

    // add title to stars area
    const title = `
            <h2></h2>  
    `
    divStarsEl.innerHTML = title
    const starTitle = divStarsEl.querySelector('h2')
    divStarsEl.insertAdjacentElement('beforebegin', starTitle)
    starTitle.innerText = 'Estrelas'
    
    // create stars and add star array values
    const packStars = `
    <div></div>
    <div></div>
    `
    divStarsEl.innerHTML = packStars
    const star1 = divStarsEl.querySelector('div:nth-child(1)')
    star1.classList.add('star')
    star1.innerText = stars[0]
    const star2 = divStarsEl.querySelector('div:nth-child(2)')
    star2.classList.add('star')
    star2.innerText = stars[1]

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

    for (let j = 0; j < 2; j++) {
        generateStar()
        if (stars.length > 0) {
            checkDuplicateStar()
        } else {
            addStar()
        }
        console.log(stars[j])
    }

    writeNumbers()

    writeStars()

    bt.classList.add('is-hidden')
    btReset.classList.add('is-visible')

}