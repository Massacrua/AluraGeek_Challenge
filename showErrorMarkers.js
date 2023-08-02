function showErrorRedLine(input) {
    const bottomLine = input.parentElement.parentElement.querySelector(".input__line")
    bottomLine.style.background = "red"
    setTimeout(() => bottomLine.style.background = "#C8C8C8", 4000)
}

function showErrorMsg(input) {
    const errorSpan = input.parentNode.parentNode.querySelector(".error__msg")
    errorSpan.classList.remove("error__msg-hidden")
    setTimeout(() => errorSpan.classList.add("error__msg-hidden"), 4000)
}

export const errorMarkers = {
    showErrorRedLine,
    showErrorMsg
}