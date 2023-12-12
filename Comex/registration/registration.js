const burger = document.querySelector(".icoMenu");
const iconOpenBurger = document.querySelector(".icoMenuOpen");
const iconCloseBurger = document.querySelector(".icoMenuClose");
const column = document.querySelector("aside");

burger.addEventListener("click", function () {
    burger.classList.toggle("show");
    iconOpenBurger.classList.toggle("show");
    iconCloseBurger.classList.toggle("show");
    column.classList.toggle("show");
})