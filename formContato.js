import { errorMarkers } from "./showErrorMarkers.js";
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


})();