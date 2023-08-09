let containerEl = document.querySelector(".container");
for (let index = 0; index < 30; index++) {
    let colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);

}

let colorContainerEls = document.querySelectorAll(".color-container")

generateColors()

function generateColors() {
    colorContainerEls.forEach((colorContainerEl)=>{
        let newColorCode = randomColor()
        
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode
    }) 
}

function randomColor() {
    let chars = "0123456789abcdef";
    let colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNumber, randomNumber + 1);
    }
    return colorCode;
}