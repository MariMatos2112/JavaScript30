const txtActivated = document.querySelector("#activated");
const txtNotActivated = document.querySelector("#not-activated");

const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "a",
  "b",
  "Enter",
];
let currentSequence = [];
let indexSequence = 0;
let images = [];
let index = 0;

const addImg = (e) => {
  let img = document.createElement("img");
  img.src = `/images/${images[index]}.png`;
  img.style.position = "absolute";
  img.style.top = `${e.clientY}px`;
  img.style.left = `${e.clientX}px`;
  img.style.transform = "translate(-50%, -50%)";
  document.querySelector("body").appendChild(img);
};

for (let i = 1; i < 13; i++) {
  images.push(i);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && currentSequence.length === 0) {
    currentSequence = [event.key];
    indexSequence = 1;
  } else if (event.key === konamiSequence[indexSequence]) {
    currentSequence.push(event.key);
    indexSequence++;
  } else currentSequence = [];

  if (currentSequence[currentSequence.length - 1] === "Enter") {
    txtNotActivated.style.display = "none";
    txtActivated.style.display = "block";
  }
});

document.addEventListener("click", (e) => {
  if (txtActivated.style.display === "block") {
    if (index <= 10) {
      addImg(e);
      index++;
    } else {
      addImg(e);
      index = 0;
    }
  }
});
