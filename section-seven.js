document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".section-seven .slide");
  const prevBtn = document.querySelector(".section-seven .prev-btn");
  const nextBtn = document.querySelector(".section-seven .next-btn");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = "none";
      slide.classList.remove("active");
    });
    slides[index].style.display = "flex";
    slides[index].classList.add("active");
  }

  function prevSlide() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
  }

  function nextSlide() {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    showSlide(currentIndex);
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Initialize the slider
  showSlide(currentIndex);
});
