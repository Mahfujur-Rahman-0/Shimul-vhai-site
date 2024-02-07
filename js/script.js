// Define the fadeInElement function
function fadeInElement(element, duration) {
  var opacity = 0;
  var interval = 50;
  var gap = interval / duration;

  function fadeIn() {
    opacity += gap;
    element.style.opacity = opacity;
    element.style.visibility = "visible";

    if (opacity >= 1) {
      clearInterval(fadeInterval);
    }
  }

  var fadeInterval = setInterval(fadeIn, interval);
}

// Define the fadeInElements function
function fadeInElements(elements, duration) {
  elements.forEach(function (element) {
    fadeInElement(element, duration);
  });
}
