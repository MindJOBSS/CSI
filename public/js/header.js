const navlinks = document.querySelector(".navlinks");
const menuButton = document.querySelector(".menuButton");
const navbar = document.querySelector(".navbar");
const dropDownBtn = document.querySelectorAll(".dropDown");

menuButton.addEventListener("click" , () => {
    navlinks.classList.toggle("open");
    navbar.classList.toggle("open");
});

dropDownBtn.forEach((btn) => {
    btn.addEventListener("click" , () => {
        console.log("i was clicked");
        window.scrollTo(0, document.body.scrollHeight);
    });
});