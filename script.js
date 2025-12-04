const checkbox = document.getElementsByClassName("checkbox")[0];
const textfields = document.querySelectorAll(".textfield");
const button = document.getElementsByTagName("button")[0];
const resultDiv = document.querySelector(".div");

function handleInput(event) {
console.log(event.target);
const fieldName = event.target.name;
if (fieldName === "content") {
resultDiv.innerHTML = event.target.value;
}
}
textfields.forEach((field) => {
field.addEventListener("input", handleInput);
});
checkbox.addEventListener("change", function (event) {
let colorField = null;
textfields.forEach((field) => {
if (field.name === "color") {
colorField = field;
}
});
const chosenColor = colorField.value;
resultDiv.style.backgroundColor = chosenColor;
console.log("Checkbox ändrad", event.target.checked);
});
button.addEventListener("click", function () {
    resultDiv.remove();
});
