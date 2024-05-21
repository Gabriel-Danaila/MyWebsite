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

  if (width > 800) {
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
// ! == == == ==  animation  == == == ==

const buttons = [
  document.getElementById("button1"),
  document.getElementById("button2"),
  document.getElementById("button3"),
  document.getElementById("button4"),
];

const spans = [
  document.getElementById("span1"),
  document.getElementById("span2"),
  document.getElementById("span3"),
  document.getElementById("span4"),
];

// Function to update colors
function updateTextColor(index) {
  spans.forEach((span, i) => {
    if (i === index) {
      span.classList.add("active");
    } else {
      span.classList.remove("active");
    }
  });
}

function updateCircle(index) {
  const activeCircles = document.querySelectorAll(".svg-container .circle");

  activeCircles.forEach((activeCircle, i) => {
    if (i === index) {
      activeCircle.classList.remove("hidden-circle");
      activeCircle.classList.add("show-circle");
    } else {
      activeCircle.classList.add("hidden-circle");
      activeCircle.classList.remove("show-circle");
    }
  });
}

// ====== slide animation

function updateLeftImages(index) {
  const images = document.querySelectorAll(".left-images-container img");

  images.forEach((image, i) => {
    if (i === index) {
      image.style.opacity = "1";
    } else {
      image.style.opacity = "0";
    }
  });
}

function updateRightImages(index) {
  const images = document.querySelectorAll(".right-images-container img");

  images.forEach((image, i) => {
    if (i === index) {
      image.style.opacity = "1";
    } else {
      image.style.opacity = "0";
    }
  });
}

// Attach event listeners to SVGs
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    updateTextColor(index);
    updateCircle(index);
    updateLeftImages(index);
    updateRightImages(index);
  });
});

// Attach event listeners to Spans
spans.forEach((span, index) => {
  span.addEventListener("click", () => {
    updateTextColor(index);
    updateCircle(index);
    updateLeftImages(index);
    updateRightImages(index);
  });
});

//circle and dots resize base on the screen size

function resizeCircles() {
  const innerCircles = document.querySelectorAll(".dot");
  const outerCircles = document.querySelectorAll(".circle");

  innerCircles.forEach((circle) => {
    if (window.innerWidth <= 768) {
      // Update the radius for the dot on smaller screens
      innerCircles.forEach((circle) => {
        circle.setAttribute("r", "6.5");
      });

      // Update the radius for the circle on smaller screens
      outerCircles.forEach((circle) => {
        circle.setAttribute("r", "9");
      });
    } else {
      // Reset the radius to original dimensions for the dot
      innerCircles.forEach((circle) => {
        circle.setAttribute("r", "9.5");
      });

      // Reset the radius to original dimensions for the circle
      outerCircles.forEach((circle) => {
        circle.setAttribute("r", "12");
      });
    }
  });
}

// swipe handelers

let currentImageIndex = 0; // Assuming 0 is the starting index

document
  .querySelectorAll(".left-images-container, .right-images-container")
  .forEach((container) => {
    let startX = 0; // Starting X position

    container.addEventListener("touchstart", (event) => {
      startX = event.touches[0].clientX;
    });

    container.addEventListener("touchend", (event) => {
      let endX = event.changedTouches[0].clientX;
      handleSwipe(startX, endX);
    });
  });

function handleSwipe(startX, endX) {
  if (startX - endX > 50) {
    // Swiped left
    // Move to the next image if available
    if (currentImageIndex < buttons.length - 1) {
      currentImageIndex++;
      updateUIForIndex(currentImageIndex);
    }
  } else if (endX - startX > 50) {
    // Swiped right
    // Move to the previous image if available
    if (currentImageIndex > 0) {
      currentImageIndex--;
      updateUIForIndex(currentImageIndex);
    }
  }
}

function updateUIForIndex(index) {
  updateTextColor(index);
  updateCircle(index);
  updateLeftImages(index);
  updateRightImages(index);
}

// Initial call to set the attributes based on the initial window size
resizeCircles();

// Listen for window resize events
window.addEventListener("resize", resizeCircles);
