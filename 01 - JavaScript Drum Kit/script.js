const keys = document.querySelectorAll(".key");
const audios = document.querySelectorAll("audio");

function btnEffect(eventType, buttons, border, transform, bgColor, sounds) {
  document.addEventListener(eventType, (e) => {
    buttons.forEach((el) => {
      if (e.keyCode == el.dataset.key) {
        el.style.border = border;
        el.style.transform = transform;
        el.style.backgroundColor = bgColor;

        if (sounds) {
          sounds.forEach((el) => {
            if (e.keyCode == el.dataset.key) {
                el.play();
                el.currentTime = 0;
            };
          });
        }
      }
    });
  });
}

btnEffect("keydown", keys, ".4rem solid yellow", "scale(1.1)", "rgba(255,255,0,.2)", audios);

btnEffect("keyup", keys, ".4rem solid black", "scale(1)", "rgba(0,0,0,0.4)");