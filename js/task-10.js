function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

let amountOfEements;

function createBoxes(amount) {
  let markupElements = "";
  let sizeEL = 30;
  for (let i = 0; i < amount; i += 1) {
    markupElements += `
 <div class="element" style="background-color: ${getRandomHexColor()}; width: ${sizeEL}px; height: ${sizeEL}px"></div>
  `;
    sizeEL += 10;
  }
  return markupElements;
}

inputEl.addEventListener("input", (e) => {
  amountOfEements = Number(e.currentTarget.value);
  // console.log(amountOfEements);
});

btnCreateEl.addEventListener("click", () => {
  if (document.querySelector(".element")) {
    boxesEl.innerHTML = "";
  }
  boxesEl.insertAdjacentHTML("beforeend", createBoxes(amountOfEements));
  inputEl.value = "";
});

btnDestroyEl.addEventListener("click", () => {
  boxesEl.innerHTML = "";
});
