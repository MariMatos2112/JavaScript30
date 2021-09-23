const imgs = document.querySelectorAll("img");

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

document.addEventListener("scroll", (e) => {
  for (const img of imgs) {
    if (isInViewport(img)) img.classList.add("active");
    else img.classList.remove("active");
  }
});
