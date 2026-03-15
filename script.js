function moveRandomEl(elm) {
  const padding = 50;
  const btnW = elm.offsetWidth;
  const btnH = elm.offsetHeight;

  const minX = padding;
  const minY = padding;
  const maxX = window.innerWidth - btnW - padding;
  const maxY = window.innerHeight - btnH - padding;

  const randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
  const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

  elm.style.transform = "none";
  elm.style.bottom = "auto";
  elm.style.right = "auto";
  elm.style.left = Math.max(padding, Math.min(randomX, maxX)) + "px";
  elm.style.top = Math.max(padding, Math.min(randomY, maxY)) + "px";
}

const moveRandom = document.querySelector(".move-random");

if (moveRandom) {
  moveRandom.addEventListener("mouseenter", () => {
    moveRandomEl(moveRandom);
  });

  moveRandom.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveRandomEl(moveRandom);
  }, { passive: false });
}

const no2NoBtn = document.getElementById("no2-no-btn");
if (no2NoBtn) {
  setTimeout(() => {
    no2NoBtn.style.display = "inline-block";
  }, 3000);
}