(() => {
const loginForm = document.querySelector(".login__form")
loginForm.addEventListener("submit", (e) => {
        e.preventDefault()
        window.location.href = "./produtos-home.html"
    })
})()