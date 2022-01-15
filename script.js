// Ansprache des Button mit document.querySelector("") — console.log(Testen obs funktioniert)
const showHideButton = document.querySelector("#show-hide-button");
/* Setzen des Click-Events mit add.EventListener("event", ) und der Funktion, 
  welche Interaktion soll ausgeführt werden mit dem Event*/
showHideButton.addEventListener("click", function () {
  // Ansprache der beiden Password-Fields — first & second aus HTML —
  const firstPasswordInput = document.querySelector("#first-password-input");
  const secondPasswordInput = document.querySelector("#second-password-input");
  // getAttribute ruft den Wert des Attributes ab
  const currentType = firstPasswordInput.getAttribute("type");
  // Wenn der Wert des Attributes "password" ist, dann …
  if (currentType === "password") {
    firstPasswordInput.setAttribute("type", "text");
    secondPasswordInput.setAttribute("type", "text");
    showHideButton.innerText = "Hide Password";
  }
  // Wenn der Wert des Attributes nicht "password" ist, dann …
  else {
    firstPasswordInput.setAttribute("type", "password");
    secondPasswordInput.setAttribute("type", "password");
    showHideButton.innerText = "Show Password";
  }

  const passwordInput = document.querySelector("#password-input-field");
  passwordInput.addEventListener("input", function () {
    const equalPassword = document.querySelector("#equal-password");
    if (
      firstPasswordInput.value === secondPasswordInput.value &&
      firstPasswordInput.value !== ""
    ) {
      equalPassword.innerHTML = "✅";
      // Prüfe die anderen nur, wenn Password equal!
      const lowerCaseLetter = (string1) => /[a-z]/.test(string1);
      const checkLowerCaseLetter = document.querySelector("#lower-case");

      if (lowerCaseLetter(firstPasswordInput.value)) {
        checkLowerCaseLetter.innerHTML = "✅";
      } else {
        checkLowerCaseLetter.innerHTML = "❌";
      }

      const upperCaseLetter = (string2) => /[A-Z]/.test(string2);
      const checkUpperCaseLetter = document.querySelector("#upper-case");

      if (upperCaseLetter(firstPasswordInput.value)) {
        checkUpperCaseLetter.innerHTML = "✅";
      } else {
        checkUpperCaseLetter.innerHTML = "❌";
      }

      const leastOneNumber = (string3) => /[0-9]/.test(string3);
      const checkLeastOneNumber = document.querySelector("#contains-numbers");

      if (leastOneNumber(firstPasswordInput.value)) {
        checkLeastOneNumber.innerHTML = "✅";
      } else {
        checkLeastOneNumber.innerHTML = "❌";
      }

      const leastTenCharacters = document.querySelector(
        "#least-ten-characters"
      );
      if (firstPasswordInput.value.length >= 10) {
        leastTenCharacters.innerHTML = "✅";
      } else {
        leastTenCharacters.innerHTML = "❌";
      }
    } else {
      equalPassword.innerHTML = "❌";
    }
  });
});
