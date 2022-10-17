const loginFormEL = document.querySelector("form.login-form");

loginFormEL.addEventListener("submit", (e) => {
  event.preventDefault();

  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;
  if (!email || !password) {
    alert("Заполните все поля");
    return;
  }
  const formDate = { email, password };
  console.log(formDate);
  loginFormEL.reset();
});
