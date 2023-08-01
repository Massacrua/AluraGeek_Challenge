(() => {
const inputs = document.querySelectorAll(".input__input")

inputs.forEach((input) => {
    input.addEventListener("invalid", (event) => {
        event.preventDefault()
        showErrorRedLine(input)
        showErrorMsg(input)
        console.log(input.validity)
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

function showErrorRedLine(input) {
    const bottomLine = input.parentElement.parentElement.querySelector(".input__line")
    bottomLine.style.background = "red"
    setTimeout(() => bottomLine.style.background = "#C8C8C8", 4000)
}

function showErrorMsg(input) {
    const errorSpan = input.parentNode.parentNode.querySelector(".error__msg")
    console.log(errorSpan)
    errorSpan.classList.remove("error__msg-hidden")
    setTimeout(() => errorSpan.classList.add("error__msg-hidden"), 4000)
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