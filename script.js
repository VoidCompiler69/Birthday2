const pages = [...document.querySelectorAll(".page")];
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
let musicStarted = false;

function showPage(id) {
  pages.forEach(page => page.classList.toggle("active", page.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
async function startMusic() {
  if (musicStarted) return;
  try {
    await music.play();
    musicStarted = true;
    musicToggle.innerHTML = "♫ <span>Music on</span>";
  } catch (error) {
    musicToggle.innerHTML = "♫ <span>Tap for music</span>";
  }
}
musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try { await music.play(); musicToggle.innerHTML = "♫ <span>Music on</span>"; }
    catch { musicToggle.innerHTML = "♫ <span>Add music file</span>"; }
  } else {
    music.pause();
    musicToggle.innerHTML = "♫ <span>Music off</span>";
  }
});

document.getElementById("yesBtn").addEventListener("click", () => { startMusic(); showPage("confirmPage"); });
document.getElementById("noBtn").addEventListener("click", () => showPage("noPage"));
document.getElementById("tryAgain").addEventListener("click", () => showPage("welcome"));
document.getElementById("confirmYes").addEventListener("click", () => { startMusic(); showPage("birthdayPage"); });
document.getElementById("confirmNo").addEventListener("click", () => showPage("noPage"));
document.getElementById("cakeBtn").addEventListener("click", () => showPage("finalPage"));
document.getElementById("restartBtn").addEventListener("click", () => showPage("welcome"));

const deck = document.getElementById("photoDeck");
const cards = [...deck.querySelectorAll(".photo-card")];
const nextPilePhoto = document.getElementById("nextPilePhoto");
let activeIndex = 0;
let isAnimating = false;

function paintPile() {
  cards.forEach((card, index) => {
    const offset = (index - activeIndex + cards.length) % cards.length;
    card.classList.toggle("active-card", offset === 0);
    card.classList.remove("leaving");
    card.style.zIndex = String(cards.length - offset);
    if (offset === 0) {
      card.style.transform = "translate(0,0) rotate(-1deg) scale(1)";
      card.style.opacity = "1";
      card.style.filter = "none";
    } else {
      const depth = Math.min(offset, 4);
      const x = depth * 5;
      const y = depth * 5;
      const rotation = (offset % 2 ? 1 : -1) * (depth * 1.3);
      card.style.transform = `translate(${x}px,${y}px) rotate(${rotation}deg) scale(${1 - depth * .018})`;
      card.style.opacity = offset > 4 ? "0" : "1";
      card.style.filter = `brightness(${1 - depth * .035})`;
    }
  });
}
function showNextPilePhoto() {
  if (isAnimating) return;
  isAnimating = true;
  const current = cards[activeIndex];
  current.classList.add("leaving");
  window.setTimeout(() => {
    activeIndex = (activeIndex + 1) % cards.length;
    paintPile();
    isAnimating = false;
  }, 380);
}
deck.addEventListener("click", showNextPilePhoto);
deck.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.classList.contains("active-card")) {
    event.preventDefault();
    showNextPilePhoto();
  }
});
nextPilePhoto.addEventListener("click", showNextPilePhoto);
paintPile();
