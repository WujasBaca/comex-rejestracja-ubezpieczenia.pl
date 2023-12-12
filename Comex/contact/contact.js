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

function SendMail() {
    let params = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_ix0vcml", "template_fvcji6p", params).then(function (res) {
        alert("Wiadomość wysłana!" + res.status);
    })
}