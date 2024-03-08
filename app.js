const match = document.getElementById("error-match");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

function passwordMatch() {
  if (password.value == "" && confirmPassword.value == "") {
    match.style.color = "red";
    match.textContent =  "* Passwords do not match";
  } else if (password.value !== confirmPassword.value) {
    match.style.color = "red";
    match.textContent = "* Passwords do not match";
  }
  else if ( password === confirmPassword){
    match.textContent = ""
  }
}

passwordMatch();
