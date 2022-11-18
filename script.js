/* show & close form */

let loginform = document.querySelector('.login-form')
let signupform = document.querySelector('.signup-form')

function LoginForm() {
  loginform.classList.add("showLogin")
  signupform.classList.remove("showSignUp")
}

function SignUpForm() {
  signupform.classList.add("showSignUp")
  loginform.classList.remove("showLogin")
}

function closeForm() {
  loginform.classList.remove("showLogin")
  signupform.classList.remove("showSignUp")
}

/* save data to local storage */

function SignUp(event) {
  const uname = document.getElementById("uname").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value

  var user = {
    email: email,
    uname: uname,
    password: password,
  };
  console.log(user)
  console.log(password)
  localStorage.setItem(uname, JSON.stringify(user))
  signupform.classList.remove("showSignUp")
  alert("Signed Up Successfully")
}

function Login(event) {
  var uname = document.getElementById("uname-login").value
  var user = JSON.parse(localStorage.getItem(uname))

  if (!user) {
    console.log('User Doesnt Exist')
  }

  var password = document.getElementById("password-login").value

  if (user.password !== password) {
    alert('Wrong Password!')
  } else {
    alert('Logged In Successfully')
  }

  loginform.classList.remove("showLogin")
}

