const panels = document.querySelectorAll(".panel");

panels.forEach((element) => {
  element.addEventListener("click", () => {
    const updateValues = (value1, value2, value3) => {
      element.style.width = value1;
      element.querySelector(".topWord").style.marginTop = value2;
      element.querySelector(".middleWord").style.fontSize = value3;
      element.querySelector(".bottomWord").style.marginBottom = value2;
    };

    if (element.style.width == "100%") updateValues("20%", "-150px", "80px");
    else updateValues("100%", 0, "120px");
  });
});
