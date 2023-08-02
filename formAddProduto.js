(() => {
const addProductForm = document.querySelector(".addproduto__form")
addProductForm.addEventListener("submit", event => {
    event.preventDefault()
    window.location.href = "./produtos-home.html"
})

})()