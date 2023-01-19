let divContainer = document.createElement("div");
divContainer.classList.add("divContainer");
divContainer.id = "divContainer";
divContainer.style.border = "solid";
divContainer.style.borderColor = "white";
divContainer.style.display = "flex";
divContainer.style.flexDirection = "column";
divContainer.style.flexBasis = "auto";

document.body.appendChild(divContainer);
document.body.style.backgroundColor = "black";
document.body.style.display = "flex";

let divMenu = document.createElement("div");
let inputRange = document.createElement("input");
let rangeValue = document.createElement("div");
rangeValue.id = "rangeValue";
rangeValue.style.color = "white";
rangeValue.textContent = "value:";
inputRange.type = "range";
inputRange.classList.add = "inputRange";
inputRange.min = "1";
inputRange.max = "60";
inputRange.value = "16";

divMenu.appendChild(inputRange);
divMenu.appendChild(rangeValue);
document.body.insertBefore(divMenu, divContainer);
function showRangeValue(val) {
  rangeValue.textContent = `${val} x ${val}`;
}
inputRange.addEventListener("change", (e) => {
  setGrid(e.target.value);
  showRangeValue(e.target.value);
});
