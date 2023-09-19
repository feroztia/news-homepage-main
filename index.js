const openMenuButton = document.getElementById("open-menu");
const closeMenuButton = document.getElementById("close-menu");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

openMenuButton.addEventListener("click", () => {
    nav.classList.add("active");
    overlay.classList.add("active");
});

closeMenuButton.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
});
