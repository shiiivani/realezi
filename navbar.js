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

// Upper Nav
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".upper-nav-menu-icon");
  const closeBtn = document.querySelector(".upper-nav-close-icon");
  const dropdown = document.querySelector(".mobile-view-upper-nav");

  menuBtn.addEventListener("click", function () {
    menuBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
    dropdown.classList.add("active");
  });

  closeBtn.addEventListener("click", function () {
    menuBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
    dropdown.classList.remove("active");
  });
});
