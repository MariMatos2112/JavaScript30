const btnPlay = document.querySelector(".toggle");
const video = document.querySelector("video");
const inputVolume = document.querySelector('input[name="volume"]');
const inputSpeed = document.querySelector('input[name="playbackRate"]');
const btnSkipForward = document.querySelector("#skipForward");
const btnSkipBackwards = document.querySelector("#skipBackwards");
const iconPlay = document.querySelector("#playIcon");
const iconPause = document.querySelector("#pauseIcon");
let isPlaying = false;

btnPlay.addEventListener("click", () => {
  isPlaying = !isPlaying;

  if (isPlaying) {
    video.play();
    iconPause.style.display = "block";
    iconPlay.style.display = "none";
  } else {
    video.pause();
    iconPause.style.display = "none";
    iconPlay.style.display = "block";
  }
});

inputVolume.addEventListener("input", () => {
  video.volume = inputVolume.value;
});

inputSpeed.addEventListener("input", () => {
  video.playbackRate = inputSpeed.value;
});

btnSkipBackwards.addEventListener("click", () => {
  video.currentTime += Math.round(btnSkipBackwards.dataset.skip);
});

btnSkipForward.addEventListener("click", () => {
  video.currentTime += Math.round(btnSkipForward.dataset.skip);
});
