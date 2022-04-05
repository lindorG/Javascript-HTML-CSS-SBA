
const navLinks = document.getElementById("navLinks");
  
function showMenu() {
  navLinks.style.right = "0"
}
function hideMenu() {
  navLinks.style.right = "-200px"
}

const registerForm = document.getElementById("register-form")

const displayName = document.getElementById("displayName")
const displayNameErrPara = document.getElementById("displayNameErr")


const email = document.getElementById("email")
const emailErrPara = document.getElementById("emailErr")

const password = document.getElementById("password")
const passwordErrPara = document.getElementById("passwordErr")

const confirmPassword = document.getElementById("confirmPassword")
const confirmPasswordErrOnePara = document.getElementById("confirmPasswordErrOne")
const confirmPasswordErrTwoPara = document.getElementById("confirmPasswordErrTwo")

registerForm.addEventListener("submit", (e) => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  const displayNameValue = displayName.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const confirmPasswordValue = confirmPassword.value.trim()

  if (displayNameValue === "") {
    displayNameErrPara.style.display = "block"
    } else {
      displayNameErrPara.style.display = "none"
  }

  if (emailValue === "") {
    emailErrPara.style.display = "block"
    } else {
      emailErrPara.style.display = "none"
  }
  
  if (passwordValue === "") {
    passwordErrPara.style.display = "block"
    } else {
      passwordErrPara.style.display = "none"
  }
  
  if (confirmPasswordValue == "") {
    confirmPasswordErrOnePara.style.display = "block"
  } else if (confirmPasswordValue != passwordValue && confirmPasswordValue != "") {
    confirmPasswordErrTwoPara.style.display = "block"
  } else {
      confirmPasswordErrOnePara.style.display = "none"
  }
  // let frm = document.getElementsByName('input_field');

  // console.log(frm)
  // if (frm == false) {
  //   confirmPasswordErrOnePara.style.display = "none"
  // } else {
  //   window.location.href="../HTML/index.html"
  // }
}
// function setErrorFor(input, message) {
//   const formControl = input.parentElement
//   const small = formatControl.querySelector("small")

//   small.innerText = message

//   formControl.className = "form-control error"
// }

displayName.addEventListener("input", function(e) {
  let regEx = /^[\w]{3,8}$/
  let currentValue = e.target.value
  let valid = regEx.test(currentValue)

  if(valid) {
    displayNameErrPara.style.display = "none"
  } else {
    displayNameErrPara.style.display = "block"
  }
})

email.addEventListener("input", function(e) {
    let regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let currentValue = e.target.value
    let valid = regEx.test(currentValue)

    if(valid) {
      emailErrPara.style.display = "none"
    } else {
      emailErrPara.style.display = "block"
    }
})

password.addEventListener("input", function(e) {
  let regEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  let currentValue = e.target.value
  let valid = regEx.test(currentValue)

  if(valid) {
    passwordErrPara.style.display = "none"
  } else {
    passwordErrPara.style.display = "block"
  }
})

const submissionRedirect = function () {
  return window.location.href="../HTML/index.html"
}

/* UNUSED CODE */

// confirmPassword.addEventListener("input", function(e) {
//   let regEx = (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
//   let currentValue = e.target.value
//   let valid = regEx.test(currentValue)

//   if(valid) {
//     confirmPasswordErrOnePara.style.display = "none"
//   } else {
//     confirmPasswordErrOnePara.style.display = "block"
//   }
// })

/* RECOMMENDED CODE WHICH USES JQUERY */

// $(document).ready(function() {

//     $('#text-box').on("submit", function(){
//         if (
//             $('#registerEmailInputInput').val() == '' ||
//             $('#registerFirstNameInput').val() == '' ||
//             $('#registerLastNameInput').val() == '' ||
//             $('#passwordInput').val() == '' ||
//             $('#reenterPasswordInput').val() == ''
//         ) {
//             alert("All fields are required in order to register");
//             return false;
//         }
//     })
// })