let loader = document.querySelector(".loader");
let main = document.querySelector(".main");
function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.classList.add("d-none");
    main.classList.add("d-block");
  }, 1850);
}
init();
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let menuIcon = document.querySelector(".menu-icon");
// let firstSpan = document.querySelector(".first");
// let secondSpan = document.querySelector(".second");
// let thirdSpan = document.querySelector(".third");
// menuIcon.onclick = function () {
//   secondSpan.classList.toggle("hide");
//   firstSpan.classList.toggle("move");
//   thirdSpan.classList.toggle("move");
//   firstSpan.classList.toggle("rotatepo");
//   thirdSpan.classList.toggle("rotatene");
// };
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let done = document.querySelector(".done");
let btnClose = document.querySelector(".close");
let form = document.getElementById("form");
function sendEmail() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let formContact = document.querySelector(".form-contact");
  let input = document.getElementById("email").value;
  let textArea = document.getElementById("textarea").value;
  let body = `
    <b>Name: </b>${firstName} ${lastName}
    <br />
    <br />
    <b>Email: </b> ${input}
    <br />
    <br />
    <b>Message: </b> ${textArea}`;
  console.log(input);
  console.log(textArea);
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "eslamrageh41@gmail.com",
    Password: "E1F7B97B96591BE838B2F279214778F093F8",
    To: "almhmdyzyd759@gmail.com",
    From: "eslamrageh41@gmail.com",
    Body: body,
    Subject: "Contact Form",
    Port: 2525,
    SSL: false,
  }).then(
    setTimeout(() => {
      formContact.classList.add("d-none");
      done.classList.remove("d-none");
    }, 1000),
    (error) => console.log(error)
  );
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  sendEmail();
});
btnClose.onclick = function () {
  location.reload();
};
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
