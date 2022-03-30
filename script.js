let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm-password");
let submitBtn = document.getElementById("submit-btn");


function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    password.style.cssText = "border-color: red;"
  } else {
    confirm_password.setCustomValidity('');
    password.style.cssText = "border-color: blue;"
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;