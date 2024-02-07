document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var backgroundSlider = document.querySelector(".background-slider");
    fadeInElement(backgroundSlider, 2000);
  }, 3000);

  var contentElements = document.querySelectorAll(".content");
  fadeInElements(contentElements, 2000);

  setTimeout(function () {
    var header = document.querySelector("header");
    header.style.visibility = "visible";
    header.style.opacity = 1;

    var main = document.querySelector(".main");
    fadeInElement(main, 2000);

    var footer = document.querySelector("footer");
    footer.style.visibility = "visible";
    footer.style.opacity = 1;
  }, 4000);

  var fadeRightElement = document.querySelector(".pirate-girl");
  var fadeLeftElement = document.querySelector(".pirate-man");

  setTimeout(function () {
    fadeRightElement.classList.add("fade-in-right");
    fadeLeftElement.classList.add("fade-in-left");
  }, 5000);

  var menuItems = document.querySelectorAll("nav ul li");
  menuItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      // console.log("Clicked on:", event.target); // Log the clicked element
      event.preventDefault(); // Prevent default anchor behavior
      const clickedSectionId = this.querySelector("a")
        .getAttribute("href")
        .substring(1);
      if (clickedSectionId === "home") {
        location.reload(); // Reload the page if the target section is 'home'
      }
      menuItems.forEach(function (item) {
        item.classList.remove("active");
      });

      this.classList.add("active");
    });
  });

  setTimeout(() => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    ldCount = 500;
    galleryItems.forEach((item, index) => {
      ldCount;
      setTimeout(() => {
        item.style.opacity = 1;
      }, ldCount); // Adjust the delay time as per your preference
      ldCount += 1500;
    });
  }, 5000);

  window.addEventListener("load", function () {
    var preloader = document.querySelector(".preloader");
    preloader.style.opacity = "0";
    setTimeout(function () {
      preloader.style.display = "none";
    }, 200);
  });

  // ... (your existing code)

  window.addEventListener("load", function () {
    var preloader = document.querySelector(".preloader");
    preloader.style.opacity = "0";
    setTimeout(function () {
      preloader.style.display = "none";
    }, 200);

    // Add lazy loading to background-slider images
    var backgroundSliderImages = document.querySelectorAll(
      ".background-slider img"
    );
    backgroundSliderImages.forEach(function (img) {
      img.setAttribute("loading", "lazy");
    });

    // ... (rest of your existing code)

    // Add lazy loading to gallery item images
    var galleryItemImages = document.querySelectorAll(".gallery-item img");
    galleryItemImages.forEach(function (img) {
      img.setAttribute("loading", "lazy");
    });
  });

  const sections = document.querySelectorAll(".section");
  const menus = document.querySelectorAll("nav ul li a");
  let xcounter = 0;
  let mIntervID;
  document.querySelectorAll("nav ul li a, a.link").forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      const targetSectionId = this.getAttribute("href").substring(1);
      if (targetSectionId == "home") {
        location.reload();
      }
      sections.forEach((section) => {
        section.style.display = "none"; //comment
      });
      const targetSection = document.getElementById(targetSectionId);
      targetSection.classList.add("fade-in");
      targetSection.style.display = "block"; //comment
      var innerMain = document.getElementById("inner-main");
      innerMain.scrollTop = 0;
      if (targetSectionId == "home") {
        clearInterval(mIntervID);
        xcounter = 0;
        fixedHomeImage();
        var fadeLeftElement = document.querySelector(".pirate-man");
        fadeLeftElement.classList.add("fade-in-left");
        fadeLeftElement.classList.remove("fade-out-left");
        var fadeRightElement = document.querySelector(".pirate-girl");
        fadeRightElement.classList.add("fade-in-right");
        fadeRightElement.classList.remove("fade-out-right");
      } else {
        xcounter++;
        if (xcounter == 1) {
          mIntervID = setInterval(nextImage, 5000);
        }
        var fadeLeftElement = document.querySelector(".pirate-man");
        fadeLeftElement.classList.remove("fade-in-left");
        fadeLeftElement.classList.add("fade-out-left");
        var fadeRightElement = document.querySelector(".pirate-girl");
        fadeRightElement.classList.remove("fade-in-right");
        fadeRightElement.classList.add("fade-out-right");
      }
      setTimeout(() => {
        targetSection.classList.remove("fade-in");
      }, 5000);
    });
  });

  var images = document.querySelectorAll(".background-slider img");
  let index = 0;
  function nextImage() {
    images[index].style.opacity = "0";
    index = (index + 1) % images.length;
    images[index].style.opacity = "1";
  }
  function fixedHomeImage() {
    images[index].style.opacity = "0";
    index = (index + 1) % images.length;
    images[0].style.opacity = "1";
  }

  document.querySelectorAll(".gallery-item img").forEach(function (img) {
    img.addEventListener("touchstart", function () {
      this.classList.toggle("flasher");
    });
  });

  setTimeout(() => {
    adjustGalleryItemHeight();
  }, 4000);

  window.addEventListener("resize", function () {
    adjustGalleryItemHeight();
  });

  function adjustGalleryItemHeight() {
    var galleryItems = document.querySelectorAll("#home .gallery-item");
    var maxHeight = 0;
    galleryItems.forEach(function (item) {
      item.style.height = "auto";
      var height = item.offsetHeight;
      maxHeight = Math.max(maxHeight, height);
    });
    galleryItems.forEach(function (item) {
      item.style.height = maxHeight + "px";
    });
  }
});
