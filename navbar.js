document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".hamburger-menu");
  const closeIcon = document.querySelector(".close-icon");
  const mobileNav = document.querySelector(".mobile-nav");

  hamburgerIcon.addEventListener("click", function () {
    mobileNav.classList.add("active");
  });

  closeIcon.addEventListener("click", function () {
    mobileNav.classList.remove("active");
  });
});

const listItems = document.querySelectorAll(".upper-nav li");

listItems.forEach((item) => {
  item.addEventListener("click", function () {
    listItems.forEach((li) => li.classList.remove("active"));

    this.classList.add("active");
  });
});
