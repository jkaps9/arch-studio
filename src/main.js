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
      switchSlide(slideIDs.indexOf(slideIndicator.target.id));
    });
  });
}

function switchSlide(slideNumber) {
  const slides = [
    {
      title: "Project Paramour",
      description:
        "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
      mobileImg: "x",
      tabletImg: "x",
      desktopImg: "x",
    },
    {
      title: "Seraph Station",
      description:
        "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
      mobileImg: "x",
      tabletImg: "x",
      desktopImg: "x",
    },
    {
      title: "Federal II Tower",
      description:
        "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
      mobileImg: "x",
      tabletImg: "x",
      desktopImg: "x",
    },
    {
      title: "Trinity Bank Tower",
      description:
        "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
      mobileImg: "x",
      tabletImg: "x",
      desktopImg: "x",
    },
  ];

  const projectTitle = document.querySelector(".hero .container h1");
  const projectDescription = document.querySelector(".hero .container p");

  projectTitle.textContent = slides[slideNumber].title;
  projectDescription.textContent = slides[slideNumber].description;
}
