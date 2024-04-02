const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

window.addEventListener('resize', function() {
  var screenWidth = window.innerWidth;
  var signinSignupColaborator = document.querySelector('.signin-signup-colaborator');

  if (screenWidth <= 768) {
    signinSignupColaborator.style.overflowX = 'scroll';
  } else {
    signinSignupColaborator.style.overflowX = 'hidden';
  }
});