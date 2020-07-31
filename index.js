const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

const mountains = document.getElementById("mountains");
const water = document.getElementById("water");
const sands = document.getElementById("sands");
const about_me = document.getElementById("about_me");

window.addEventListener("scroll", function () {
  const value = window.scrollY;
  sun.style.top = -value * 0.5 + 'px';
});
