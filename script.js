//CONSTANTS
const EDGE = 16
const DIVS = EDGE * EDGE // 16 * 16
const height = window.innerHeight
let RAINBOW = false

const createRandomHex = () => Math.floor(Math.random() * 256)
const createColorHex = () => `rgb(${createRandomHex()}, ${createRandomHex()}, ${createRandomHex()})`

// Event Listeners
const handleMouseOver = (element) => {
    if (RAINBOW === true) {
        element.style.backgroundColor = createColorHex()
    } else {
        element.classList.add('hover')
    }
}

rainbowButton = document.querySelector('button')
const handleRainbowClick = () => { 
    if (RAINBOW === true) {
        RAINBOW = false
    } else {
        RAINBOW = true
    }
}
rainbowButton.addEventListener('click', () => {handleRainbowClick()})
rainbowButton.style.backgroundColor = 'blue'
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