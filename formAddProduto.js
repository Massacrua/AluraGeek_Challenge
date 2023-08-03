import { conectaAPI } from "./conectaApi.js"

const addProductForm = document.querySelector(".addproduto__form")
addProductForm.addEventListener("submit", event => {
    event.preventDefault()
    criarProduto()
})

async function criarProduto() {
    const imageurl = document.querySelector("#img-url").value
    const categoria = document.querySelector("#categoria").value
    const nome = document.querySelector("#produto-nome").value
    const preco = document.querySelector("#produto-preco").value
    const descricao = document.querySelector("#produto-descricao").value

    try {
        await conectaAPI.criaNovoProduto(nome, preco, categoria, descricao, imageurl)
        window.location.href = "./produtos-home.html"
    } catch (e) {
        alert(e)
    }

}


