const inputs = document.querySelectorAll(".input__input")
const form = document.querySelector(".contato__form")


inputs.forEach((input) => {
    input.addEventListener("invalid", (event) => {
        event.preventDefault()
        showErrorRedLine(input)
    })
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
})

function showErrorRedLine(input) {
    const bottomLine = input.parentElement.parentElement.querySelector(".input__line")
    bottomLine.style.background = "red"
    setTimeout(() => bottomLine.style.background = "#C8C8C8", 4000)
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
