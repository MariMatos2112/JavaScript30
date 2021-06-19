function changeCSS(HTMLElement, CSSProperty, isPx) {
  const root = document.documentElement;

  HTMLElement.addEventListener("input", () => {
    if (isPx) root.style.setProperty(CSSProperty, HTMLElement.value + "px");
    else root.style.setProperty(CSSProperty, HTMLElement.value);
  });
}

changeCSS(document.getElementById("base"), "--bg-color");
changeCSS(document.getElementById("spacing"), "--img-spacing", true);
changeCSS(document.getElementById("blur"), "--img-blur", true);
