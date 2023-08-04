import { conectaAPI } from "./conectaApi.js";
import { listaEConstroiProdutos } from "./listaProdutos.js";

export default async function deletaProduto(produtoID) {
    try {
        const deleteResponse = await conectaAPI.deleteProduto(produtoID)

        const listaDeProdutos = document.querySelector(".produtos__lista-home")

        while (listaDeProdutos.firstChild) {
            listaDeProdutos.removeChild(listaDeProdutos.firstChild)
        }
        listaEConstroiProdutos.listaProdutos()
        console.log(deleteResponse)

        return deleteResponse
    } catch {
        alert("Não foi possível excluir o produto")
    }
}