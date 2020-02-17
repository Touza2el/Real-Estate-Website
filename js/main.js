// #-1 This Function Fix The Header When Scrolling

window.onscroll = function() {
  const numPixFromTop = document.documentElement.scrollTop;
  const headerElement = document.querySelector(".header");
  // if window width > 991 px execute the code inside the block
  if (window.innerWidth > 1000) {
    // if the scroll position (numPixFromTop) > 100  add class "fixed" to the header element
    if (numPixFromTop > 100) {
      headerElement.classList.add("fixed");
    } else {
      headerElement.classList.remove("fixed");
    }
  }
};

// #-2 Show and Hide Mobile NavBar

// The Environement
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".navbar");
const links = document.querySelector(".navbar").children;

// The Function
function handleNav() {
  if (!navBar.classList.contains("navbar-active")) {
    navBar.classList.add("navbar-active");
    document
      .querySelector(".hamburger-menu .div1")
      .classList.add("active-div1");
    document
      .querySelector(".hamburger-menu .div2")
      .classList.add("active-div2");
    hamburgerMenu.style.backgroundColor = " #febd01";
    document.querySelector(".navbar ul li a").classList.remove("active");
  } else {
    navBar.classList.remove("navbar-active");
    document
      .querySelector(".hamburger-menu .div1")
      .classList.remove("active-div1");
    document
      .querySelector(".hamburger-menu .div2")
      .classList.remove("active-div2");
    hamburgerMenu.style.backgroundColor = " #fff";
    document.querySelector(".navbar ul li a").classList.add("active");
  }
}

// The Event
hamburgerMenu.addEventListener("click", handleNav);

// #-3 Show and Hide Sign-Up Form

// The Environement
const signUpBtn = document.querySelector(".sign");
const signUpForm = document.querySelector(".sign-up-form");
const formCloseBtn = document.querySelector(".form-close-btn");
const formSignUpBtn = document.querySelector(".form-body-btn");
const newAccountBtn = document.querySelector(".new-account-btn");

// #-3-1 Show Sign-Up Form
// The Event
signUpBtn.addEventListener("click", showForm);
// The Function
function showForm() {
  signUpForm.style.transform = "translateY(0%)";
}
// #-3-2 Hide Sign-Up Form
// The Event
formCloseBtn.addEventListener("click", hideForm);
formSignUpBtn.addEventListener("click", hideForm);
newAccountBtn.addEventListener("click", hideForm);
// The Function
function hideForm() {
  signUpForm.style.transform = "translateY(-120%)";
}

// #-4 Switch Between Sign-Up Form and New Account Form

const navSignUp = document.querySelector(".form-nav-sign-up");
const navNewAccount = document.querySelector(".form-nav-new-account");

navNewAccount.addEventListener("click", signAccount);
function signAccount() {
  document
    .querySelector(".form-nav li:first-child")
    .classList.remove("form-nav-active");

  document
    .querySelector(".form-nav li:last-child")
    .classList.add("form-nav-active");
}

navSignUp.addEventListener("click", accountSign);
function accountSign() {
  document
    .querySelector(".form-nav li:first-child")
    .classList.add("form-nav-active");

  document
    .querySelector(".form-nav li:last-child")
    .classList.remove("form-nav-active");
}
// ------------------------------

navNewAccount.addEventListener("click", function() {
  document.querySelector(" .form-body").style.display = "none";
  document.querySelector(" .form-footer").style.display = "none";
  document.querySelector(".register-container").style.display = "flex";
});
navSignUp.addEventListener("click", function() {
  document.querySelector(" .form-body").style.display = "flex";
  document.querySelector(" .form-footer").style.display = "flex";
  document.querySelector(".register-container").style.display = "none";
});
