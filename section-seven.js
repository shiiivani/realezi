document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".section-seven .slide");
  const navDotsContainer = document.querySelector(".section-seven .nav-dots");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = "none";
      slide.classList.remove("active");
    });
    slides[index].style.display = "flex";
    slides[index].classList.add("active");

    // Update the dots
    const dots = document.querySelectorAll(".section-seven .nav-dots .dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function createDots() {
    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => {
        currentIndex = i;
        showSlide(currentIndex);
      });
      navDotsContainer.appendChild(dot);
    });
  }

  // Initialize the dots and slider
  createDots();
  showSlide(currentIndex);
});
