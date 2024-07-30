const videos = document.querySelectorAll(".video video");

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".video");

  videos.forEach((videoContainer) => {
    const video = videoContainer.querySelector("video");
    const volumeUpIcon = videoContainer.querySelector(".volume-up");
    const volumeOffIcon = videoContainer.querySelector(".volume-off");

    volumeUpIcon.addEventListener("click", function () {
      video.muted = true;
      volumeUpIcon.classList.add("hidden");
      volumeOffIcon.classList.remove("hidden");
    });

    volumeOffIcon.addEventListener("click", function () {
      video.muted = false;
      volumeOffIcon.classList.add("hidden");
      volumeUpIcon.classList.remove("hidden");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".video-slider");

  sliders.forEach((slider) => {
    const container = slider.querySelector(".video-container");
    const videos = slider.querySelectorAll(".video");
    const prevBtn = slider.querySelector(".prev-btn");
    const nextBtn = slider.querySelector(".next-btn");
    let index = 0;

    const updateSlider = () => {
      container.style.transform = `translateX(-${index * 100}%)`;
    };

    const checkScreenSize = () => {
      if (window.innerWidth <= 420) {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";

        prevBtn.addEventListener("click", slidePrev);
        nextBtn.addEventListener("click", slideNext);
      } else {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";

        prevBtn.removeEventListener("click", slidePrev);
        nextBtn.removeEventListener("click", slideNext);
      }
    };

    const slidePrev = () => {
      if (index > 0) {
        index--;
        updateSlider();
      }
    };

    const slideNext = () => {
      if (index < videos.length - 1) {
        index++;
        updateSlider();
      }
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
  });
});
