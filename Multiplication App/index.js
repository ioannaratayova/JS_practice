let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);

let questionEl = document.getElementById("question");
let inputEl = document.getElementById("input");
let formEl = document.getElementById("form");
let scoreEl = document.getElementById("score");

questionEl.innerText = `What is ${num1} multiply by ${num2}?`
let score = JSON.parse(localStorage.getItem("score"));

if(!score) {
    score = 0;
}
scoreEl.innerText = `score: ${score}`
let correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    let userAns = inputEl.value
    if (userAns == correctAns) {
        score++;
        updateLocalStorage();
    }
    else {
        score--;
        updateLocalStorage();
    }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}