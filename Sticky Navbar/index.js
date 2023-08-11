let navbarEl = document.querySelector(".navbar")
let bottomContainerEl = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight)

console.log(bottomContainerEl.offsetTop)

window.addEventListener("scroll", ()=>{
    if (window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50) {
        navbarEl.classList.add("activ");
    }
    else {
        navbarEl.classList.remove("activ");
    }
}); 