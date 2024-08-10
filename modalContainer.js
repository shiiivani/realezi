document.addEventListener("DOMContentLoaded", function () {
  const modalBtn = document.getElementById("open-section-one-modal-container");
  const modal = document.querySelector(".section-one-modal-container");
  const closeIcon = document.querySelector(
    ".section-one-modal-container .close-icon"
  );
  function showModal() {
    modal.style.display = "flex";
    modal.offsetHeight;
    modal.classList.add("show");
    modal.classList.remove("hide");
  }

  function hideModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");

    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  }

  modalBtn.addEventListener("click", function () {
    showModal();
  });

  closeIcon.addEventListener("click", function (event) {
    hideModal();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modalBtn = document.getElementById("open-section-five-modal-container");
  const modal = document.querySelector(".section-five-modal-container");
  const closeIcon = document.querySelector(
    ".section-five-modal-container .close-icon"
  );

  function showModal() {
    modal.style.display = "flex";
    modal.offsetHeight;
    modal.classList.add("show");
    modal.classList.remove("hide");
  }

  function hideModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");

    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  }

  modalBtn.addEventListener("click", function () {
    showModal();
  });

  closeIcon.addEventListener("click", function (event) {
    hideModal();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modalBtn = document.getElementById("open-section-ten-modal-container");
  const modal = document.querySelector(".section-ten-modal-container");
  const closeIcon = document.querySelector(
    ".section-ten-modal-container .close-icon"
  );
  function showModal() {
    modal.style.display = "flex";
    modal.offsetHeight;
    modal.classList.add("show");
    modal.classList.remove("hide");
  }

  function hideModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");

    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  }

  modalBtn.addEventListener("click", function () {
    showModal();
  });

  closeIcon.addEventListener("click", function (event) {
    hideModal();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownLabels = document.querySelectorAll(
    ".property-type-dropdown .label"
  );
  const dropdownOptionsList = document.querySelectorAll(
    ".property-type-dropdown .dropdown-options"
  );
  const forms = document.querySelectorAll(".modal-container");

  dropdownLabels.forEach((dropdownLabel, index) => {
    const dropdownOptions = dropdownOptionsList[index];
    const arrowIcon = dropdownLabel.querySelector("img");

    dropdownLabel.addEventListener("click", function () {
      dropdownOptions.classList.toggle("active");
      arrowIcon.classList.toggle("rotate");
    });

    dropdownOptions.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        const selectedOption = event.target.textContent;
        dropdownLabel.querySelector("p").textContent = selectedOption;
        dropdownOptions.classList.remove("active");
        arrowIcon.classList.remove("rotate");
      }
    });
  });

  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input, select");
    const submitButton = form.querySelector("button[type='submit']");

    function checkInputs() {
      let allFilled = true;
      inputs.forEach((input) => {
        if (input.type === "checkbox") {
          if (!input.checked) {
            allFilled = false;
          }
        } else if (input.value.trim() === "") {
          allFilled = false;
        }
      });
      if (allFilled) {
        submitButton.classList.add("active");
      } else {
        submitButton.classList.remove("active");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("input", checkInputs);
    });

    submitButton.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownLabel = document.querySelector(".budget-dropdown .label");
  const dropdownOptions = document.querySelector(
    ".budget-dropdown .dropdown-options"
  );
  const dropdownContent = document.querySelector(
    ".budget-dropdown .dropdown-content"
  );
  const arrowIcon = dropdownLabel.querySelector("img");

  dropdownLabel.addEventListener("click", function () {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 520) {
      dropdownOptions.classList.toggle("active");
      dropdownContent.classList.remove("active");
    } else {
      dropdownContent.classList.toggle("active");
    }
    arrowIcon.classList.toggle("rotate");
  });

  dropdownOptions.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const selectedOption = event.target.textContent;
      dropdownLabel.querySelector("p").textContent = selectedOption;
      dropdownOptions.classList.remove("active");
      arrowIcon.classList.remove("rotate");
    }
  });

  const minSlider = document.getElementById("minSlider");
  const maxSlider = document.getElementById("maxSlider");
  const minValueDisplay = document.getElementById("minValue");
  const maxValueDisplay = document.getElementById("maxValue");

  // Convert the slider value to the corresponding amount
  function convertToAmount(value) {
    if (value <= 100) {
      return `Rs.${value} Lakh`; // 1 to 100 Lakhs
    } else {
      return `Rs.${(value / 100).toFixed(2)} Crore`; // 1 to 5 Crores
    }
  }

  function updateSliderValues() {
    minValueDisplay.textContent = convertToAmount(minSlider.value);
    maxValueDisplay.textContent = convertToAmount(maxSlider.value);
  }

  minSlider.addEventListener("input", function () {
    if (parseInt(minSlider.value) >= parseInt(maxSlider.value)) {
      minSlider.value = maxSlider.value - 1;
    }
    updateSliderValues();
  });

  maxSlider.addEventListener("input", function () {
    if (parseInt(maxSlider.value) <= parseInt(minSlider.value)) {
      maxSlider.value = minSlider.value + 1;
    }
    updateSliderValues();
  });

  updateSliderValues();
});

document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".modals form");

  forms.forEach((form) => {
    const submitButton = form.querySelector(".submit-btn");

    form.addEventListener("input", function () {
      const isValid = form.checkValidity();
      submitButton.disabled = !isValid;
      if (isValid) {
        submitButton.classList.add("active");
      } else {
        submitButton.classList.remove("active");
      }
    });
  });
});
