let click = document.getElementById("click")
click.addEventListener("click", function () {
    let background = randomColor()
    this.style.backgroundColor = background
    document.body.style.backgroundColor = background
})
function randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
}