let textareaEl = document.getElementById("textarea");
let totalCounterEl = document.getElementById("total-counter");
let remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
})

updateCounter()

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}