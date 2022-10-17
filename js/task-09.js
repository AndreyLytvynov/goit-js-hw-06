function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorEL = document.querySelector(".change-color");
const textValueChangeColor = document.querySelector(".color");

btnChangeColorEL.addEventListener("click", () => {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  textValueChangeColor.textContent = `${getRandomHexColor()}`;
});
