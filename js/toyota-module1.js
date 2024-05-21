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

// ! == == == == parallax section  == == == ==

// parallax text and img

// function adjustParallaxTextPosition() {
//   const scrolled = window.scrollY;
//   const parallaxText = document.querySelector(".parallax-text");
//   parallaxText.style.top = 78 + scrolled * -0.05 + "%";
// }

function adjustParallaxTextPosition() {
  const scrolled = window.scrollY;
  const parallaxText = document.querySelector(".parallax-text");

  let baseValue = 78;

  if (window.innerWidth <= 720) {
    baseValue = 40;
  }

  parallaxText.style.top = baseValue + scrolled * -0.03 + "%";
}

// Call once to set initial position and then call on each scroll
adjustParallaxTextPosition();
window.addEventListener("scroll", adjustParallaxTextPosition);

// parallax images

window.addEventListener("scroll", function () {
  const scrolled = window.scrollY;
  const parallaxText = document.querySelector(".parallax-layer-front");
  parallaxText.style.top = 70 + scrolled * -0.02 + "%";
});

// parallax zoom

// document.addEventListener("DOMContentLoaded", () => {
//   const borderLayer = document.querySelector(".border-layer");
//   let startScroll = null;

//   function updateBorder() {
//     const scrolled = window.scrollY;
//     const topOffset = borderLayer.getBoundingClientRect().top + scrolled;

//     if (scrolled >= topOffset) {
//       if (startScroll === null) {
//         startScroll = scrolled;
//       }
//       const relativeScroll = scrolled - startScroll;
//       const newBorderTop = Math.max(0, 280 - relativeScroll * 0.5);
//       const newBorderRight = Math.max(0, 280 - relativeScroll * 0.5);
//       const newBorderBottom = Math.max(0, 280 - relativeScroll * 0.5);
//       const newBorderLeft = Math.max(0, 280 - relativeScroll * 0.5);

//       borderLayer.style.borderTopWidth = `${newBorderTop}px`;
//       borderLayer.style.borderRightWidth = `${newBorderRight}px`;
//       borderLayer.style.borderBottomWidth = `${newBorderBottom}px`;
//       borderLayer.style.borderLeftWidth = `${newBorderLeft}px`;
//     }
//   }

//   // Initial setup
//   updateBorder();

//   // Update on scroll
//   window.addEventListener("scroll", updateBorder);
// });
document.addEventListener("DOMContentLoaded", () => {
  const borderLayer = document.querySelector(".border-layer");
  let startScroll = null;
  let borderSize = window.innerWidth <= 768 ? 50 : 280; // Set initial border size based on screen width

  // Update border size when the window is resized
  window.addEventListener("resize", () => {
    borderSize = window.innerWidth <= 768 ? 50 : 280;
  });

  function updateBorder() {
    const scrolled = window.scrollY;
    const topOffset = borderLayer.getBoundingClientRect().top + scrolled;

    if (scrolled >= topOffset) {
      if (startScroll === null) {
        startScroll = scrolled;
      }
      const relativeScroll = scrolled - startScroll;
      const newBorderTop = Math.max(0, borderSize - relativeScroll * 0.5);
      const newBorderRight = Math.max(0, borderSize - relativeScroll * 0.5);
      const newBorderBottom = Math.max(0, borderSize - relativeScroll * 0.5);
      const newBorderLeft = Math.max(0, borderSize - relativeScroll * 0.5);

      borderLayer.style.borderTopWidth = `${newBorderTop}px`;
      borderLayer.style.borderRightWidth = `${newBorderRight}px`;
      borderLayer.style.borderBottomWidth = `${newBorderBottom}px`;
      borderLayer.style.borderLeftWidth = `${newBorderLeft}px`;
    }
  }

  // Initial setup
  updateBorder();

  // Update on scroll
  window.addEventListener("scroll", updateBorder);
});
