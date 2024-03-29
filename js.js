let divContainer = document.createElement("div");
const sketchContainer = document.createElement("div");
let container = document.createElement("div");

//container.style.backgroundImage = "url('sketch.jpg')";
container.style.backgroundSzie = "contain";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.height = "100%";
container.style.width = "100%";
container.style.alignItems = "center  ";
container.classList.add("container-main");
divContainer.classList.add("container-cells");
divContainer.id = "divContainer";
divContainer.style.border = "solid";
divContainer.style.borderColor = "white";
divContainer.style.display = "flex";
divContainer.style.flexDirection = "column";
divContainer.style.flexBasis = "auto";
divContainer.style.minHeight = "400px";
divContainer.style.minWidth = "400px";
divContainer.style.border = "solid";
sketchContainer.classList.add("container-sketch");
sketchContainer.style.backgroundColor = "white";
sketchContainer.appendChild(divContainer);
container.appendChild(sketchContainer);
document.body.appendChild(container);
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.height = "100%";
document.body.style.backgroundColor = "grey ";

//divMenu and its contents
let divMenu = document.createElement("div");
let buttonWhiteWrapper = document.createElement("div");
let buttonRGBWrapper = document.createElement("div");
let buttonResetWrapper = document.createElement("div");
let inputRange = document.createElement("input");
let rangeValue = document.createElement("div");
let buttonWhite = document.createElement("button");
let buttonRGB = document.createElement("button");
let buttonReset = document.createElement("button");

buttonReset.textContent = "Reset Board";
buttonWhite.textContent = "Black & White";
buttonRGB.textContent = "RGB";
buttonRGB.id = "btnRGB";
buttonWhite.id = "btnWhite";
buttonReset.id = "btnReset";
rangeValue.id = "rangeValue";
rangeValue.style.color = "black";
rangeValue.textContent = "Value:";
rangeValue.style.fontFamily = "Arial";
inputRange.type = "range";
inputRange.classList.add = "inputRange";
inputRange.min = "1";
inputRange.max = "60";
inputRange.value = "16";
divMenu.style.backgroundColor = "AntiqueWhite";
divMenu.style.border = "solid";
divMenu.style.height = "400px";
divMenu.classList.add("container-menu");

buttonResetWrapper.appendChild(buttonReset);
buttonWhiteWrapper.appendChild(buttonWhite);
buttonRGBWrapper.appendChild(buttonRGB);
divMenu.appendChild(inputRange);
divMenu.appendChild(rangeValue);
divMenu.appendChild(buttonWhiteWrapper);
divMenu.appendChild(buttonRGBWrapper);
divMenu.appendChild(buttonResetWrapper);
container.insertBefore(divMenu, sketchContainer);

function showRangeValue(val) {
  rangeValue.textContent = `Value: ${val} x ${val}`;
}
inputRange.addEventListener("change", (e) => {
  setGrid(e.target.value);
  showRangeValue(e.target.value);
});
buttonRGB.addEventListener("click", changeRGB);
buttonWhite.addEventListener("click", changeBlack);
buttonReset.addEventListener("click", () => {
  setGrid(16);
});

function setGrid(n) {
  resetBoard();
  for (i = 1; i <= n; i++) {
    let divRow = document.createElement("div");
    divRow.style.display = "flex";
    divRow.style.flexBasis = "auto";
    divRow.classList.add(`divWrapper`);
    for (j = 1; j <= n; j++) {
      let divColumn = document.createElement("div");
      divColumn.classList.add(`div`);
      divColumn.style.display = "flex";
      divColumn.style.flexBasis = "auto";
      divColumn.style.minHeight = `${400 / n}px`;
      divColumn.style.minWidth = `${400 / n}px`;
      // divColumn.style.flexBasis = "auto";
      //divColumn.style.border = "Solid";
      //divColumn.style.borderColor = "white";
      //divColumn.style.borderWidth = "0.4px";
      divRow.appendChild(divColumn);
    }
    divContainer.appendChild(divRow);
  }
  changeBlack();
}

function resetBoard() {
  while (divContainer.firstChild) {
    divContainer.removeChild(divContainer.firstChild);
  }
}

function changeRGB() {
  let divs = document.querySelectorAll(".div");

  divs.forEach((e) =>
    e.addEventListener("mouseover", () => {
      e.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    })
  );
}

function changeBlack() {
  let divs = document.querySelectorAll(".div");

  divs.forEach((e) =>
    e.addEventListener("mouseover", () => {
      e.style.backgroundColor = "black";
    })
  );
}

setGrid(16);
