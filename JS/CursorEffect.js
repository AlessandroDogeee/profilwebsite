const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const cursor = document.querySelector(".cursor");


circles.forEach((circle) => {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "white";
});

window.addEventListener("mousemove",  (e) => {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

window.addEventListener("click", (e) => {
  circles.forEach(function (circle) {
    circle.style.transition = "transform 0.2s";
    circle.style.transform = "scale(1.3)";

    setTimeout(() => {
      circle.style.transform = "scale(1)";
    }, 200)
  })
})



function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursor.style.top = x;
  cursor.style.left = y;
  
  circles.forEach((circle, index) => {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

