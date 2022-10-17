const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

let counterValue = 0;

refs.decrementBtn.addEventListener("click", onClickDecr);
refs.incrementBtn.addEventListener("click", onClickIncr);

function onClickDecr() {
  counterValue -= 1;
  refs.valueEl.textContent = `${counterValue}`;
}

function onClickIncr() {
  counterValue += 1;
  refs.valueEl.textContent = `${counterValue}`;
}
