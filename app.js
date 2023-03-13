const noKeyContent = document.getElementById("noKeyContent");
const keyContent = document.getElementById("keyContent");

const keyCodeHeader = document.getElementById("keyCodeNo");
const keyWhich = document.getElementById("eventWhichInfo");
const keyInfo = document.getElementById("eventKeyInfo");
const keyCode = document.getElementById("eventCodeInfo");

document.addEventListener("keydown", (event) => {
    noKeyContent.style.display = "none";
    keyContent.style.display = "flex";
    keyCodeHeader.textContent = event.keyCode;
    keyWhich.textContent = event.which;
    if (event.key === " ") {
        keyInfo.textContent = '" "';
    } else {
        keyInfo.textContent = event.key;
    }
    keyCode.textContent = event.code;
});