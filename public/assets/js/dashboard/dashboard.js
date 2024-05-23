const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu"); 
const mobileNavCloseBtn = document.querySelector(".btn-nav-close");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
})

mobileNavCloseBtn.addEventListener("click", () => {
    hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
     navMenu.classList.remove("active");
}))