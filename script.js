//CONSTANTS
const EDGE = 16
const DIVS = EDGE * EDGE // 16 * 16
const height = window.innerHeight
let RAINBOW = false
let ERASER = false

const createRandomHex = () => Math.floor(Math.random() * 256)
const createColorHex = () => `rgb(${createRandomHex()}, ${createRandomHex()}, ${createRandomHex()})`

// Event Listeners
const handleMouseOver = (element) => {
    if (RAINBOW === true) {
        element.style.backgroundColor = createColorHex()
    } else if(ERASER === true){
        element.style.backgroundColor = "white"
    } else {
        element.style.backgroundColor = "black"
    }
}

const rainbowButton = document.querySelector('button.rainbow')
const handleRainbowClick = () => { 
    if (RAINBOW === true) {
        RAINBOW = false
    } else {
        RAINBOW = true
        ERASER = false
    }
}
rainbowButton.addEventListener('click', () => {handleRainbowClick()})

const eraserButton = document.querySelector('button.eraser')
const handleEraserClick = () => {
    if (ERASER === true) {
        ERASER = false
    } else {
        RAINBOW = false
        ERASER = true
    }
}
eraserButton.addEventListener('click', () => {handleEraserClick()})

// making the grid settings
const body = document.querySelector('div.container')
body.style.gridTemplateColumns = `repeat(${EDGE}, 1fr)`
body.style.gridTemplateRows = `repeat(${EDGE}, 1fr)`

//Drawing the grid
for (let i = 0; i < DIVS; i++) {
    const element = document.createElement('div')
    element.classList.add("grid-element")
    // Event Handling 
    element.addEventListener('mouseover', () => handleMouseOver(element))
    
    body.appendChild(element)
}