console.clear();

const cardsContainer = document.querySelector(".cards");
const cardsContainerInner = document.querySelector(".cards__inner");
const cards = Array.from(document.querySelectorAll(".card"));
const overlay = document.querySelector(".overlay");

const applyOverlayMask = (e) => {
  const overlayEl = e.currentTarget;
  const x = e.pageX - cardsContainer.offsetLeft;
  const y = e.pageY - cardsContainer.offsetTop;

  overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
};

const createOverlayCta = (overlayCard, ctaEl) => {
  const overlayCta = document.createElement("div");
  overlayCta.classList.add("cta");
  overlayCta.textContent = ctaEl.textContent;
  overlayCta.setAttribute("aria-hidden", true);
  overlayCard.append(overlayCta);
};

const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const cardIndex = cards.indexOf(entry.target);
    let width = entry.borderBoxSize[0].inlineSize;
    let height = entry.borderBoxSize[0].blockSize;

    if (cardIndex >= 0) {
      overlay.children[cardIndex].style.width = `${width}px`;
      overlay.children[cardIndex].style.height = `${height}px`;
    }
  });
});

const initOverlayCard = (cardEl) => {
  const overlayCard = document.createElement("div");
  overlayCard.classList.add("card");
  createOverlayCta(overlayCard, cardEl.lastElementChild);
  overlay.append(overlayCard);
  observer.observe(cardEl);
};

cards.forEach(initOverlayCard);
document.body.addEventListener("pointermove", applyOverlayMask);


// ...................................
/*vanilla-tilt.js*/
const tilt = document.querySelectorAll(".tilt");

VanillaTilt.init(tilt, {
	reverse: true,
	max: 15,
	speed: 400,
	scale: 1.12,
	glare: true,
	reset: true,
	perspective: 500,
	transition: true,
	"max-glare": 0.75,
	"glare-prerender": false,
	gyroscope: true,
	gyroscopeMinAngleX: -45,
	gyroscopeMaxAngleX: 45,
	gyroscopeMinAngleY: -45,
	gyroscopeMaxAngleY: 45
});


