function moveRandomEl(elm) {
  const maxX = window.innerWidth - elm.offsetWidth;
  const maxY = window.innerHeight - elm.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  elm.style.position = "absolute";
  elm.style.left = randomX + "px";
  elm.style.top = randomY + "px";
}

const moveRandom = document.querySelector(".move-random");

moveRandom.addEventListener("mouseenter", () => {
  moveRandomEl(moveRandom);
});

