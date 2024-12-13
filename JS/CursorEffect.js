const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const cursor = document.querySelector(".cursor");

circles.forEach((circle) => {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "white";
});

window.addEventListener("mousemove", (e) => {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

window.addEventListener("click", (e) => {
  circles.forEach(function (circle) {
    circle.style.transition = " transform 0.2s";
    circle.style.transform = "scale(1.3)";

    setTimeout(() => {circle.style.transform = "scale(1)"}, 200)
  });
});

function animateCircles() {
  cursor.style.top = coords.y
  cursor.style.left = coords.x

  circles.forEach((circle, index) => {
    circle.style.left = coords.x - 13 + "px";
    circle.style.top = coords.y - 13 + "px";

    circle.style.scale = (circles.length - index) / circles.length;
  });
  requestAnimationFrame(animateCircles);
}

animateCircles();

