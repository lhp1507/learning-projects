function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}

function toggleMenu() {
  var body = document.body;
  var menuToggle = document.querySelector(".toggle");
  var navigation = document.querySelector(".navigation");

  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
  body.classList.toggle("noscroll");
}
