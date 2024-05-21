// ! == == == ==   hamburger menu  == == == ==

document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("open");
  document.querySelector(".navbar-list").classList.toggle("open");
});

window.addEventListener("resize", function () {
  // get the current window width
  let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  // check if the window width is larger than your mobile breakpoint (in this case, 800px)
  if (width > 800) {
    // if it is, remove the 'open' class from the hamburger and the navbar list
    let hamburger = document.querySelector(".hamburger");
    let navbarList = document.querySelector(".navbar-list");

    hamburger.classList.remove("open");
    navbarList.classList.remove("open");
  }
});
// to remove open class when link is triger
document.querySelectorAll(".navbar-list a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".hamburger").classList.remove("open");
    document.querySelector(".navbar-list").classList.remove("open");
  });
});

// to autohide header on mobile screen size
let lastScrollTop = 0; // Store the last scroll position

window.addEventListener(
  "scroll",
  function () {
    if (window.innerWidth <= 768) {
      let currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // Downward scroll - Hide header
        document.querySelector(".header").style.transform = "translateY(-100%)";
      } else {
        // Upward scroll - Show header
        document.querySelector(".header").style.transform = "translateY(0)";
      }

      lastScrollTop = currentScrollTop;
    } else {
      // Reset the header for larger screens
      document.querySelector(".header").style.transform = "translateY(0)";
    }
  },
  false
);

// ! == == == == accordion   == == == ==

// Initialize variables
let currentImage = document.getElementById("image1"); // Initialize to the first image
currentImage.style.opacity = 1; // Set its opacity to 1

const transitionTime = 300; // transition time in milliseconds
const accordionButtons = document.querySelectorAll(".accordion-button");

// Function to handle fading images in and out
function fadeImageIn(img) {
  if (currentImage) {
    currentImage.style.opacity = 0; // Fade out current image
  }

  setTimeout(() => {
    img.style.opacity = 1; // Fade in new image
  }, transitionTime);

  currentImage = img; // Set the new image as the current image
}

// Helper function to toggle accordions
function toggleAccordion(button, isOpen) {
  const content = button.parentElement.nextElementSibling;
  const icon = button.querySelector(".icon");

  if (isOpen) {
    button.classList.remove("is-open");
    icon.classList.remove("rotate-icon");
    content.style.maxHeight = null;
  } else {
    button.classList.add("is-open");
    icon.classList.add("rotate-icon");
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

// Attach click event listeners to each accordion button
accordionButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    // Close all other accordions
    accordionButtons.forEach((otherButton, otherIndex) => {
      if (otherIndex !== index) {
        toggleAccordion(otherButton, true);
      }
    });

    const isOpen = this.classList.contains("is-open");
    toggleAccordion(this, isOpen);

    if (!isOpen) {
      fadeImageIn(document.getElementById(`image${index + 1}`));
    }
  });
});

// // Set the first accordion to be open by default
// toggleAccordion(accordionButtons[0], false);
