let lis = document.querySelectorAll(".side-bar li");
lis.forEach((ele) => {
  ele.addEventListener("click", function () {
    lis.forEach((ele) => {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  });
});
