import { conectaAPI } from "./conectaApi.js";
const listaDeProdutos = document.querySelector(".produtos__lista-home")

function constroiProduto(nome, preco, descricao, imageurl, id) {
    const produto = document.createElement("div")
    produto.className = "produto"
    produto.innerHTML = `
        <img src="${imageurl}" alt="${descricao}" class="produto__img">
        <div class="botoes__crud">
            <button class="edit__produto botao__crud"><img src="./assets/img/edit.png" class="botao__crud-img" alt="Botão editar produto."></button>
            <button class="delete__produto botao__crud"><img src="./assets/img/delete.png" class="botao__crud-img" alt="Botão deletar produto."></button>
            <span style="display: none">${id}</span>
        </div>
        <p class="produto__titulo">${nome}</p>
        <p class="produto__preco">R$${preco}</p>
        <p class="produto__serial">#${Math.round(Math.random() * 10**7)}</p>
    `
    

    return produto
}

async function listaProdutos() {
    try {
        const produtos = await conectaAPI.getProducts()
        produtos.forEach(produto => listaDeProdutos.appendChild(constroiProduto(produto.nome, produto.preco, produto.descricao, produto.imageurl, produto.id)))

        //FAZENDO FUNÇÃO DELETE AQUI

        const botoesDelete = document.querySelectorAll(".delete__produto")
        botoesDelete.forEach(botaoDelete => botaoDelete.addEventListener("click", () => {
            console.log(botaoDelete.parentElement.querySelector("span").innerText)
        }))

        return produtos
    } catch {
        alert("Erro ao carregar lista de produtos")
    }
}
if (document.querySelector("title").innerText == "AluraGeek - Produtos") {
    listaProdutos()
}

export const listaEConstroiProdutos = {
    constroiProduto,
    listaProdutos
}