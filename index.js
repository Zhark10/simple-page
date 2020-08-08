// const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

const bg = document.getElementById("bg");
const mountain = document.getElementById("mountain");
const road = document.getElementById("road");

const about_me = document.getElementById("about_me");

window.addEventListener("scroll", function () {
  const value = window.scrollY;
  moon.style.top = -value * 0.5 + 'px';
  moon.style.left = -value * 0.5 + 'px';
  mountain.style.top = -value * 0.15 + 'px';
  road.style.top = value * 0.15 + 'px';
    
});
