// const sun = document.getElementById("sun");
// const moon = document.getElementById("moon");

const bg = document.getElementById("bg");
const mountain = document.getElementById("mountain");
const road = document.getElementById("road");

const about_me = document.getElementById("about_me");

window.addEventListener("scroll", function () {
  const value = window.scrollY;
  sun.style.top = -value * 0.5 + 'px';
});
