const togglePassword = document.querySelector("#togglePassword");
const toggleConfirmPassword = document.querySelector("#toggleConfirmPassword");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

if (togglePassword) {
  togglePassword.addEventListener("click", function (e) {
    const passwordType =
      password.getAttribute("type") === "password" ? "text" : "password";

    password.setAttribute("type", passwordType);

    const passwordIconSrc =
      passwordType === "password"
        ? "/assets/icons/obscure-true.svg"
        : "/assets/icons/obscure-false.svg";

    togglePassword.setAttribute("src", passwordIconSrc);
  });
}

if (toggleConfirmPassword) {
  toggleConfirmPassword.addEventListener("click", function (e) {
    const confirmPasswordType =
      confirmPassword.getAttribute("type") === "password" ? "text" : "password";

    confirmPassword.setAttribute("type", confirmPasswordType);

    const confirmPassworfIconSrc =
      confirmPasswordType === "password"
        ? "/assets/icons/obscure-true.svg"
        : "/assets/icons/obscure-false.svg";

    toggleConfirmPassword.setAttribute("src", confirmPassworfIconSrc);
  });
}



