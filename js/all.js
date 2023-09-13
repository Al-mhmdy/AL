let lis = document.querySelectorAll(".side-bar li");
lis.forEach((ele) => {
  ele.addEventListener("click", function () {
    lis.forEach((ele) => {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  });
});

let homeIcon = document.querySelector(".home-icon");
let infoHome = document.querySelector(".info-home");
homeIcon.addEventListener("click", function () {
  infoHome.classList.toggle("d-none");
  infoAbout.classList.add("d-none");
  infoSocial.classList.add("d-none");
  infoPortfolio.classList.add("d-none");
  infoContact.classList.add("d-none");
  infoTeam.classList.add("d-none");
});

let aboutIcon = document.querySelector(".about-icon");
let infoAbout = document.querySelector(".info-about");
aboutIcon.addEventListener("click", function () {
  infoAbout.classList.toggle("d-none");
  infoSocial.classList.add("d-none");
  infoHome.classList.add("d-none");
  infoPortfolio.classList.add("d-none");
  infoContact.classList.add("d-none");
  infoTeam.classList.add("d-none");
});

let portfolioIcon = document.querySelector(".portfolio-icon");
let infoPortfolio = document.querySelector(".info-portfolio");
portfolioIcon.addEventListener("click", function () {
  infoPortfolio.classList.toggle("d-none");
  infoHome.classList.add("d-none");
  infoAbout.classList.add("d-none");
  infoSocial.classList.add("d-none");
  infoContact.classList.add("d-none");
  infoTeam.classList.add("d-none");
});

let socialIcon = document.querySelector(".social-icon");
let infoSocial = document.querySelector(".info-social");
socialIcon.addEventListener("click", function () {
  infoSocial.classList.toggle("d-none");
  infoHome.classList.add("d-none");
  infoAbout.classList.add("d-none");
  infoPortfolio.classList.add("d-none");
  infoContact.classList.add("d-none");
  infoTeam.classList.add("d-none");
});

let contactIcon = document.querySelector(".contact-icon");
let infoContact = document.querySelector(".info-contact");
contactIcon.addEventListener("click", function () {
  infoContact.classList.toggle("d-none");
  infoAbout.classList.add("d-none");
  infoSocial.classList.add("d-none");
  infoHome.classList.add("d-none");
  infoPortfolio.classList.add("d-none");
  infoTeam.classList.add("d-none");
});

let teamIcon = document.querySelector(".team-icon");
let infoTeam = document.querySelector(".info-team");
teamIcon.addEventListener("click", function () {
  infoTeam.classList.toggle("d-none");
  infoHome.classList.add("d-none");
  infoAbout.classList.add("d-none");
  infoSocial.classList.add("d-none");
  infoContact.classList.add("d-none");
  infoPortfolio.classList.add("d-none");
});
