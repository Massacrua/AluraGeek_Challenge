const input = document.querySelector(".input__input")
const inputLabel = document.querySelector(".input__label")

const inputLabelClasses = inputLabel.classList

input.addEventListener("input", () => {
    const inputEmpty = isEmpty(input)
    if (inputEmpty) {
        inputLabelClasses.add("input__label-hide")
    } else {
        inputLabelClasses.remove("input__label-hide")
    }
})

function isEmpty(input) {
    if (input.value == "") {
        return true
    }
    return false
}