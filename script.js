//CONSTANTS
let EDGE = document.getElementById('grid-size').value
const DIVS = EDGE * EDGE // 16 * 16
const height = window.innerHeight
let RAINBOW = false
let ERASER = false

const createRandomHex = () => Math.floor(Math.random() * 256)
const createColorHex = () => `rgb(${createRandomHex()}, ${createRandomHex()}, ${createRandomHex()})`

// Event Listeners
const gridSize = document.getElementById('grid-size')
gridSize.addEventListener('input', () => {drawGrid(gridSize.value) })


const drawGrid = (number) => {
    while (body.firstChild) {
        body.removeChild(body.firstChild)
    }

    for (let i = 0; i < (number * number); i++) {
        const element = document.createElement('div')
        element.classList.add("grid-element")
        // Event Handling 
        element.addEventListener('mouseover', () => handleMouseOver(element))

        body.appendChild(element)
    }
    //grid style settings
    body.style.gridTemplateColumns = `repeat(${number}, 1fr)`
    body.style.gridTemplateRows = `repeat(${number}, 1fr)`

    //changing size text
    const gridSizeContainer = document.querySelector('p.size-container')
    gridSizeContainer.innerText = `${number} * ${number} Grid`
};


const handleMouseOver = (element) => {
    if (RAINBOW === true) {
        element.style.backgroundColor = createColorHex()
    } else if (ERASER === true) {
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
rainbowButton.addEventListener('click', () => { handleRainbowClick() })

const eraserButton = document.querySelector('button.eraser')
const handleEraserClick = () => {
    if (ERASER === true) {
        ERASER = false
    } else {
        RAINBOW = false
        ERASER = true
    }
}
eraserButton.addEventListener('click', () => { handleEraserClick() })

// making the grid settings
const body = document.querySelector('div.container')
body.style.gridTemplateColumns = `repeat(${EDGE}, 1fr)`
body.style.gridTemplateRows = `repeat(${EDGE}, 1fr)`

//Drawing the default grid
for (let i = 0; i < (DIVS); i++) {
    const element = document.createElement('div')
    element.classList.add("grid-element")
    // Event Handling 
    element.addEventListener('mouseover', () => handleMouseOver(element))

    body.appendChild(element)
}
