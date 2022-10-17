const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);
function onInputChange(e) {
  outputEl.textContent = `${e.currentTarget.value}`;
  if (e.currentTarget.value === "") {
    outputEl.textContent = "Anonymous";
  }
}
