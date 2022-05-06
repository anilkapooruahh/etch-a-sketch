//CONSTANTS
const EDGE = 16
const DIVS =  EDGE * EDGE // 16 * 16
const height = window.innerHeight
const width = window.innerWidth
const limit = (width < height ? width : height) 
const side = Math.floor(limit / EDGE)


const body = document.querySelector('div.container')

for (let i = 0; i < DIVS; i++) {
    const element =  document.createElement('div')
    element.textContent = `${i}`
    element.classList.add("grid-element")
    element.style.setProperty("--grid-element-size", `${side}px`)
    body.appendChild(element)
}