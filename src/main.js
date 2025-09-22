import "./style.css";

addNavToggleOnClick();

function addNavToggleOnClick() {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  navToggle.addEventListener("click", () => {
    nav.classList.toggle("visible");
  });
}

function removeActiveFromSlideSwitcher() {
  const slideSwitcher = document.querySelector(".slide-switcher");
  const slideIndicators = slideSwitcher.querySelectorAll(".slide-indicator");

  slideIndicators.forEach((element) => {
    element.classList.remove("active");
  });
}

addSlideIndicatorOnClick();

function addSlideIndicatorOnClick() {
  const slideIDs = ["slide-one", "slide-two", "slide-three", "slide-four"];
  const slideSwitcher = document.querySelector(".slide-switcher");
  const slideIndicators = slideSwitcher.querySelectorAll(".slide-indicator");
  slideIndicators.forEach((element) => {
    element.addEventListener("click", (slideIndicator) => {
      console.log(slideIndicator);
      switchSlide(slideIDs.indexOf(slideIndicator.target.id));
    });
  });
}

function switchSlide(slideNumber) {
  console.log(slideNumber);
}
