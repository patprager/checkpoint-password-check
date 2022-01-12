const showHideButton = document.querySelector("#show-hide-button");
showHideButton.addEventListener("click", function () {
  const firstPasswordInput = document.querySelector("#first-password-input");
  const secondPasswordInput = document.querySelector("#second-password-input");
  const currentType = firstPasswordInput.getAttribute("type");

  if (currentType === "password") {
    firstPasswordInput.setAttribute("type", "text");
    secondPasswordInput.setAttribute("type", "text");
    showHideButton.innerText = "Hide Password";
  } else {
    firstPasswordInput.setAttribute("type", "password");
    secondPasswordInput.setAttribute("type", "password");
    showHideButton.innerText = "Show Password";
  }
});
