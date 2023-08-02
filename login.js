(() => {
const loginForm = document.querySelector(".login__form")
loginForm.addEventListener("submit", (event) => {
    event.preventDefault()
    window.location.href = "./produtos-home.html"
})

})()