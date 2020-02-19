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
// #-2 Add The active Class To The Clicked iIem In The NavBar
const navBarCont = document.querySelector(".navbar-ul");
const aCont = navBarCont.querySelectorAll("a");

aCont.forEach(function(aitem) {
  aitem.addEventListener("click", function() {
    for (let i = 0; i < aCont.length; i++) {
      aCont[i].classList.remove("active");
    }
    this.classList.add("active");
  });
});

// #-3 Show and Hide Mobile NavBar

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
    // document.querySelector(".navbar ul li a").classList.remove("active");
  } else {
    navBar.classList.remove("navbar-active");
    document
      .querySelector(".hamburger-menu .div1")
      .classList.remove("active-div1");
    document
      .querySelector(".hamburger-menu .div2")
      .classList.remove("active-div2");
    hamburgerMenu.style.backgroundColor = " #fff";
    // document.querySelector(".navbar ul li a").classList.add("active");
  }
}

// The Event
hamburgerMenu.addEventListener("click", handleNav);

// #-4 Show and Hide Sign-Up Form

// The Environement
const signUpBtn = document.querySelector(".sign");
const signUpForm = document.querySelector(".sign-up-form");
const formCloseBtn = document.querySelector(".form-close-btn");
const formSignUpBtn = document.querySelector(".form-body-btn");
const newAccountBtn = document.querySelector(".new-account-btn");

// #-4-1 Show Sign-Up Form
// The Event
signUpBtn.addEventListener("click", showForm);
// The Function
function showForm() {
  signUpForm.style.transform = "translateY(0%)";
}
// #-4-2 Hide Sign-Up Form
// The Event
formCloseBtn.addEventListener("click", hideForm);
formSignUpBtn.addEventListener("click", hideForm);
newAccountBtn.addEventListener("click", hideForm);
// The Function
function hideForm() {
  signUpForm.style.transform = "translateY(-120%)";
}

// #-5 Switch Between Sign-Up Form and New Account Form

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
const formBody = document.querySelector(" .form-body");
const formFooter = document.querySelector(" .form-footer");
const registerContainer = document.querySelector(".register-container");

navNewAccount.addEventListener("click", function() {
  formBody.style.display = "none";
  formFooter.style.display = "none";
  registerContainer.style.display = "flex";
});

navSignUp.addEventListener("click", function() {
  formBody.style.display = "flex";
  formFooter.style.display = "flex";
  registerContainer.style.display = "none";
});

// #-6 Drop-Down menu hover
if (window.innerWidth > 720) {
  document
    .querySelector(".dp-container  ")
    .addEventListener("mouseover", function() {
      document.querySelector(".dp-items").style.display = "flex";
    });

  document.querySelector(".dp-items").addEventListener("mouseout", function() {
    document.querySelector(".dp-items").style.display = "none";
  });
  document.querySelector(".hero").addEventListener("mouseout", function() {
    document.querySelector(".dp-items").style.display = "none";
  });
} else {
  document
    .querySelector(".dp-container")
    .addEventListener("mouseover", function() {
      document.querySelector(".dp-items").style.display = "block";
      document.querySelector(".dp-items").style.width = "200px";
      document.querySelector(".dp-items").style.top = "5px";
      document.querySelector(".dp-items").style.left = "-220px";
    });

  document.querySelector(".dp-items").addEventListener("mouseout", function() {
    document.querySelector(".dp-items").style.display = "none";
  });
  document.querySelector(".hero").addEventListener("mouseout", function() {
    document.querySelector(".dp-items").style.display = "none";
  });
}
