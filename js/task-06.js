const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onInpuChange);

function onInpuChange(e) {
  inputEl.removeAttribute("class");
  if (e.currentTarget.value.length >= 6) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
