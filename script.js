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

  passwordInput.addEventListener("input", function () {
    const equalPassword = document.querySelector("#equal-password");
    const checkLowerCaseLetter = document.querySelector("#lower-case");
    const checkUpperCaseLetter = document.querySelector("#upper-case");
    const checkLeastOneNumber = document.querySelector("#contains-numbers");
    const leastTenCharacters = document.querySelector("#least-ten-characters");
    // Prüfe die anderen nur, wenn Password equal!
    if (
      firstPasswordInput.value === secondPasswordInput.value &&
      firstPasswordInput.value !== ""
    ) {
      equalPassword.innerHTML = "✅";
      // Prüfungen auf lowerCaseLetter
      const lowerCaseLetter = (string1) => /[a-z]/.test(string1);

      if (lowerCaseLetter(firstPasswordInput.value)) {
        checkLowerCaseLetter.innerHTML = "✅";
      } else {
        checkLowerCaseLetter.innerHTML = "❌";
      }
      // Prüfung auf upperCaseLetter
      const upperCaseLetter = (string2) => /[A-Z]/.test(string2);

      if (upperCaseLetter(firstPasswordInput.value)) {
        checkUpperCaseLetter.innerHTML = "✅";
      } else {
        checkUpperCaseLetter.innerHTML = "❌";
      }
      // Prüfung auf Zahlen
      const leastOneNumber = (string3) => /[0-9]/.test(string3);

      if (leastOneNumber(firstPasswordInput.value)) {
        checkLeastOneNumber.innerHTML = "✅";
      } else {
        checkLeastOneNumber.innerHTML = "❌";
      }
      // Prüfung auf die Länge des Passwords
      if (firstPasswordInput.value.length >= 10) {
        leastTenCharacters.innerHTML = "✅";
      } else {
        leastTenCharacters.innerHTML = "❌";
      }
    } else {
      equalPassword.innerHTML = "❌";
      checkLowerCaseLetter.innerHTML = "❌";
      checkUpperCaseLetter.innerHTML = "❌";
      checkLeastOneNumber.innerHTML = "❌";
      leastTenCharacters.innerHTML = "❌";
    }
  });
});
