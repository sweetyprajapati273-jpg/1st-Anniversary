const screens = [
  ...document.querySelectorAll(".screen")
];

let index = 0;


/* =========================
   SCREEN CHANGE
========================= */

function show(n) {

  index = (n + screens.length) % screens.length;

  screens.forEach((screen, i) => {

    screen.classList.toggle(
      "active",
      i === index
    );

  });

  createHearts();
}


/* =========================
   NEXT
========================= */

function next() {
  show(index + 1);
}


/* =========================
   START BUTTON
========================= */

document
  .querySelector(".start")
  .addEventListener("click", next);


/* =========================
   NEXT BUTTONS
========================= */

document
  .querySelectorAll(".next")
  .forEach(button => {

    button.addEventListener(
      "click",
      next
    );

  });


/* =========================
   REPLAY
========================= */

document
  .querySelector(".restart")
  .addEventListener(
    "click",
    () => show(0)
  );


/* =========================
   TAP SCREEN
========================= */

document
  .querySelector(".scene")
  .addEventListener("click", event => {

    // Button click ko ignore karo
    if (event.target.closest("button")) {
      return;
    }

    // First screen par anywhere tap
    if (index === 0) {
      next();
    }

  });


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

  const container =
    document.querySelector(".hearts");

  for (let i = 0; i < 7; i++) {

    const heart =
      document.createElement("span");

    heart.className = "heart";

    heart.textContent =
      ["❤️", "💗", "💕", "💖"][
        Math.floor(
          Math.random() * 4
        )
      ];

    heart.style.left =
      Math.random() * 100 + "%";

    heart.style.fontSize =
      14 + Math.random() * 18 + "px";

    heart.style.animationDuration =
      3 + Math.random() * 3 + "s";

    container.appendChild(heart);


    // Kuch seconds baad remove
    setTimeout(() => {

      heart.remove();

    }, 6500);

  }

}


/* =========================
   AUTO HEARTS
========================= */

setInterval(() => {

  if (Math.random() < 0.65) {
    createHearts();
  }

}, 2800);


/* =========================
   START HEART ANIMATION
========================= */

createHearts();
