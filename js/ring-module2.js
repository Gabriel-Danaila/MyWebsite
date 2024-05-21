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
// ! == == == ==   adding images on smaller screen size  == == == ==
window.onload = function () {
  let image1 = document.querySelector(".img1");
  let image2 = document.querySelector(".img2");
  let image3 = document.querySelector(".img3");
  let image4 = document.querySelector(".img4");

  function resizeImage() {
    if (window.innerWidth <= 720) {
      image1.src = "../img/ring-module2/ring-img1-small.png";
      image2.src = "../img/ring-module2/ring-img2-small.png";
      image3.src = "../img/ring-module2/ring-img3-small.png";
      image4.src = "../img/ring-module2/ring-img4-small.png";
    } else {
      image1.src = "../img/ring-module2/ring-img1.png";
      image2.src = "../img/ring-module2/ring-img2.png";
      image3.src = "../img/ring-module2/ring-img3.png";
      image4.src = "../img/ring-module2/ring-img4.png";
    }
  }

  window.onresize = resizeImage;
  resizeImage();
};

// ! == == == ==   hover container  == == == ==

let clearTimer = null;

function updateLargeImage(imgPath, textImgNumber) {
  if (window.innerWidth <= 720) {
    return;
  }

  // If there's a pending clear operation, cancel it
  if (clearTimer !== null) {
    clearTimeout(clearTimer);
    clearTimer = null;
  }

  let largeImageDiv = document.querySelector(".large-image");
  largeImageDiv.style.backgroundImage = `url(${imgPath})`;
  largeImageDiv.style.opacity = "1";

  let textDiv = document.querySelector(".text-img" + textImgNumber);
  textDiv.classList.add("show");
  // textDiv.style.opacity = "1";
}

function clearLargeImage() {
  if (window.innerWidth <= 720) {
    return;
  }

  let largeImageDiv = document.querySelector(".large-image");
  largeImageDiv.style.opacity = "0";
  clearTimer = setTimeout(function () {
    if (largeImageDiv.style.opacity == "0") {
      largeImageDiv.style.backgroundImage = "";
    }
    clearTimer = null;
  }, 500);

  hideAllTexts();
}

function hideAllTexts() {
  if (window.innerWidth <= 720) {
    return;
  }

  for (let i = 1; i <= 4; i++) {
    let textDiv = document.querySelector(".text-img" + i);
    textDiv.classList.remove("show");
    // textDiv.style.opacity = "0";
  }
}
