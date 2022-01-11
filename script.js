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
 const passwordEqual = document.querySelector("input").addEventListener("click", button)
 
 function filterModusEqual (){
    const equalChecked = document.querySelector("input").addEventListener("click", button)
    const passwordEqual = firstPwInput === secondPwInput

    if (passwordEqual === true) {
        const EqualIsTrue = document.createElement("✅");
        equalChecked.appendChild(EqualIsTrue);
} else {
    passwordEqual === false;
    const EqualIsFalse = document.createElement("❌"); 
    equalChecked.appendChild(EqualIsFalse)    
    }
}

2. Passwort enthält mindestens einen "lowerCaseLetter"
const lowerCaseLetter = /a-z/; | if passwordEqual = true, 
than überprüfe den passwordInput auf lowerCaseLetter

function checkedLowerCase (passwordEqual === true) {
    const lowerCaseChecked = document.querySelector("input").addEventListener("click", button);
    const lowerCaseLetter = for ("input" = /a-z/; "input" > 10; i++)

   if (lowerCaseLetter === true) {
    const lowerCaseIsTrue = document.createElement("✅");
    lowerCaseChecked.appendChild(lowerCaseIsTrue);
   } else {
       lowerCaseLetter = false;
       const lowerCaseIsFalse = document.createElement("❌");
       lowerCaseChecked.appendChild(lowerCaseIsFalse);
   }
}

3. Passwort enthält mindestens einen "upperCaseLetter"
const upperCaseLetter = /A-Z/

4. Passwort enthält mind. eine Zahl
const leastOneNumber = /0-9/

5. Passwort ist mind. 10 Zeichen lang (.lenght > 10)


  */
