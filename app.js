let iconMenu = document.querySelector(".bodymovinanim");
const navigation = document.querySelector(".navigation");
const circle = document.querySelector(".circle_1");
const a = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const navbar = document.querySelector(".navbar");
const nav = document.querySelector(".nav-list");

function alpha() {
  let ab = Math.floor(Math.random() * a.length);
  return ab;
}

let animationMenu = bodymovin.loadAnimation({
  container: iconMenu,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "./menuV2.json",
});

var directionMenu = 1;
iconMenu.addEventListener("click", function (e) {
  animationMenu.setDirection(directionMenu);
  animationMenu.play();
  directionMenu = -directionMenu;
  iconMenu.classList.toggle("active");
  iconMenu.classList.toggle("fixed");
  navigation.classList.toggle("active");
  nav.classList.toggle("nav-active");
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += a[alpha()];
  }
  return hex;
});

const colors = document.getElementsByClassName("colors");

let i;
for (i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", changeColor);
}

function changeColor() {
  let color = this.getAttribute("data-color");
  document.documentElement.style.setProperty("--clr", color);
}

window.addEventListener("scroll", function () {
  navbar.classList.toggle("sticky", window.scrollY > 0);
});
