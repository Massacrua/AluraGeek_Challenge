import { errorMarkers } from "./showErrorMarkers.js";
import buscarProduto from "./buscaProduto.js"
(() => {
const inputs = document.querySelectorAll(".input__input")

inputs.forEach((input) => {
    input.addEventListener("invalid", (event) => {
        event.preventDefault()
        errorMarkers.showErrorRedLine(input)
        errorMarkers.showErrorMsg(input)
    })
    toggleEmptyInputLabel(input)
})

function toggleEmptyInputLabel(input) {
    input.addEventListener("input", () => {
        const inputEmpty = isEmpty(input)
        const inputLabel = input.parentElement.querySelector(".input__label")
        const labelClassList = inputLabel.classList

        if (inputEmpty) {
            hideLabel(labelClassList)
        } else {
            showLabel(labelClassList)
        }
    })
}

function isEmpty(input) {
    if (input.value == "") {
        return true
    }
    return false
}

function showLabel(labelClassList) {
    labelClassList.remove("input__label-hide")
}

function hideLabel(labelClassList) {
    labelClassList.add("input__label-hide")
}

const botaoPesquisa = document.querySelector(".barra__pesquisa-lupa")
botaoPesquisa.addEventListener("click", evento => {
    const stringPesquisa = document.querySelector(".barra__pesquisa-input").value
    if (stringPesquisa != "" && document.querySelector("title").innerText != "AluraGeek - Produtos") {
        window.location.href = "./produtos-home.html"
    }
    buscarProduto(evento, stringPesquisa)
})


})();