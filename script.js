document.getElementById("year").textContent = new Date().getFullYear();

const talismanCard = document.querySelector(".hero-card-alt");

if (talismanCard) {
  const restartPulse = () => {
    talismanCard.classList.remove("is-pulsing");
    requestAnimationFrame(() => {
      talismanCard.classList.add("is-pulsing");
    });
  };

  talismanCard.addEventListener("animationend", (event) => {
    if (event.animationName === "talisman-pulse") {
      talismanCard.classList.remove("is-pulsing");
    }
  });

  talismanCard.addEventListener("click", () => {
    talismanCard.classList.toggle("is-pink-mode");
    restartPulse();
  });
}
