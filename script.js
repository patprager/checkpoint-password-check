const passwordInput = document.querySelector("input");
const firstPWInput = document.querySelector("#first-password-input");
const secondPwInput = document.querySelector("#second-password-input");

const toggleButton = document.querySelector("#how-hide-button");
const hideBtn = document.querySelector(" #hide-button");

/*
0. cklickedButton – showPassword anzeigen des passwordInput or
 hidePassword ausblenden des passwordInput */

function clickedBtn() {
  const showBtn = document.getElementById("#show-hide-button").innerHTML;
  const pwFields = document.getElementById("input");

  if (showBtn === "Show Password") {
    pwFields.setAttribute("type", "text");
    document.getElementById("#how-hide-button").innerHTML = "Hide Password";
  } else {
    pwFields.setAttribute("input", "text");
    document.getElementById("show-hide-button");
  }
}

window.addEventListener("load", function () {
  const showPw = this.document.getElementById("show-hide-button");
  showPw.addEventListener("click", clickedBtn);
});

/*
1. Passwörter sind identisch
 if passwordEqual = false than is lowerCaseLetter, uperCaseLetter,
 leastOneNumber, leastTenCharacters = false 

 document.querySelector("#equal-password").addEventListener("click", clickedBtn);

2. Passwort enthält mindestens einen "lowerCaseLetter"

3. Passwort enthält mindestens einen "uperCaseLetter"

4. Passwort enthält mind. eine Zahl

5. Passwort ist mind. 10 Zeichen lang

function filterModus (){
    const passwordEqual = document.querySelector("input").addEventListener("click", button)
    if () {
        passwordEqual = true;
    } else {
        
    }
}
  */
