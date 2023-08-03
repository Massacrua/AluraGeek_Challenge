import { conectaAPI } from "./conectaApi.js";
import { listaEConstroiProdutos } from "./listaProdutos.js"

export default async function buscarProduto(evento, stringPesquisa) {
    evento.preventDefault()
    console.log(stringPesquisa)

    
    const busca = await conectaAPI.buscaProduto(stringPesquisa)
    const listaDeProdutos = document.querySelector(".produtos__lista-home")

    while (listaDeProdutos.firstChild) {
        listaDeProdutos.removeChild(listaDeProdutos.firstChild)
    }

    busca.forEach(produto => listaDeProdutos.appendChild(listaEConstroiProdutos.constroiProduto(produto.nome, produto.preco, produto.descricao, produto.imageurl)))

    if (busca.length == 0) {
        listaDeProdutos.innerHTML = `<p class="produtos__titulo">Nenhum item encontrado.</p>`
    }
}

