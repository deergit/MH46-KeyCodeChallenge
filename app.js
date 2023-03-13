const keyWhichHeader = document.getElementById("keyCodeNo");
const keyWhich = document.getElementById("eventWhichInfo");
const keyInfo = document.getElementById("eventKeyInfo");
const keyCode = document.getElementById("eventCodeInfo");

document.addEventListener("keydown", (event) => {
    console.log(event.key);
    keyWhichHeader.textContent = event.keyCode;
    keyWhich.textContent = event.keyCode;
    keyInfo.textContent = event.key;
    keyCode.textContent = event.code;
});