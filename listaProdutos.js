import { conectaAPI } from "./conectaApi.js";
const listaDeProdutos = document.querySelector(".produtos__lista")

function constroiProduto(nome, preco, descricao, imageurl) {
    const produto = document.createElement("div")
    produto.className = "produto"
    produto.innerHTML = `
        <img src="${imageurl}" alt="${descricao}" class="produto__img">
        <p class="produto__titulo">${nome}</p>
        <p class="produto__preco">R$${preco}</p>
        <p class="produto__serial">#${Math.round(Math.random() * 10000000)}</p>
    `

    return produto
}

async function listaProdutos() {
    try {
        const produtos = await conectaAPI.getProducts()
        produtos.forEach(produto => listaDeProdutos.appendChild(constroiProduto(produto.nome, produto.preco, produto.descricao, produto.imageurl)))
    } catch {
        alert("Erro ao carregar lista de produtos")
    }
}
listaProdutos()